import { Link } from '@wowsims/ui';
import clsx from 'clsx';
import { ref } from 'tsx-vanilla';

import { Player } from '../player.js';
import { PlayerClasses } from '../player_classes/index.js';
import { UnitReference } from '../proto/common.js';
import { emptyUnitReference } from '../proto_utils/utils.js';
import { Raid } from '../raid.js';
import { EventID, TypedEvent } from '../typed_event.js';
import { Input, InputConfig } from './input.jsx';

export interface UnitReferencePickerConfig<ModObject> extends InputConfig<ModObject, UnitReference> {
	noTargetLabel: string;
	compChangeEmitter: TypedEvent<void>;
}

interface OptionElemOptions {
	isDropdown?: boolean;
	player: Player<any> | null;
}

// Dropdown menu for selecting a player.
export class UnitReferencePicker<ModObject> extends Input<ModObject, UnitReference> {
	private readonly config: UnitReferencePickerConfig<ModObject>;
	private readonly raid: Raid;

	private curPlayer: Player<any> | null;
	private curUnitReference: UnitReference;

	private currentOptions: Array<OptionElemOptions>;

	private readonly buttonElem: HTMLElement;
	private readonly dropdownElem: HTMLElement;

	constructor(parent: HTMLElement, raid: Raid, modObj: ModObject, config: UnitReferencePickerConfig<ModObject>) {
		super(parent, 'raid-target-picker-root', modObj, config);
		this.rootElem.classList.add('dropdown');
		this.config = config;
		this.raid = raid;
		this.curPlayer = this.raid.getPlayerFromUnitReference(config.getValue(modObj));
		this.curUnitReference = this.getInputValue();

		const buttonRef = ref<HTMLAnchorElement>();
		const dropdownRef = ref<HTMLDivElement>();

		this.rootElem.appendChild(
			<>
				<Link ref={buttonRef} as="button" className="raid-target-picker-button" data-bs-toggle="dropdown" />
				<div ref={dropdownRef} className="dropdown-menu" />
			</>,
		);

		this.buttonElem = buttonRef.value!;
		this.dropdownElem = dropdownRef.value!;

		this.buttonElem.addEventListener('click', event => event.preventDefault());

		this.currentOptions = [];
		this.updateOptions(TypedEvent.nextEventID());
		config.compChangeEmitter.on(eventID => this.updateOptions(eventID));

		this.init();
	}

	private makeTargetOptions(): Array<OptionElemOptions> {
		const unassignedOption = { player: null, isDropdown: true };
		const playerOptions = this.raid
			.getPlayers()
			.filter(player => player != null)
			.map(player => {
				return { player: player, isDropdown: true };
			});

		return [unassignedOption, ...playerOptions];
	}

	private updateOptions(eventID: EventID) {
		this.currentOptions = this.makeTargetOptions();

		this.dropdownElem.replaceChildren(...this.currentOptions.map(option => this.makeOption(option)));

		const prevUnitReference = this.curUnitReference;
		this.curUnitReference = this.getInputValue();
		if (!UnitReference.equals(prevUnitReference, this.curUnitReference)) {
			this.inputChanged(eventID);
		} else {
			this.setInputValue(this.curUnitReference);
		}
	}

	private makeOption(data: OptionElemOptions) {
		const option = UnitReferencePicker.makeOptionElem(data);

		option.addEventListener('click', event => {
			event.preventDefault();
			this.curPlayer = data.player;
			this.curUnitReference = this.getInputValue();
			this.inputChanged(TypedEvent.nextEventID());
		});

		return option;
	}

	getInputElem(): HTMLElement {
		return this.buttonElem;
	}

	getInputValue(): UnitReference {
		if (this.curPlayer) {
			return this.curPlayer.makeUnitReference();
		} else {
			return emptyUnitReference();
		}
	}

	setInputValue(newValue: UnitReference) {
		this.curUnitReference = UnitReference.clone(newValue);
		this.curPlayer = this.raid.getPlayerFromUnitReference(this.curUnitReference);

		const optionData = this.currentOptions.find(optionData => optionData.player == this.curPlayer);

		if (optionData) this.buttonElem.innerHTML = UnitReferencePicker.makeOptionElem({ player: optionData.player }).outerHTML;
	}

	static makeOptionElem(data: OptionElemOptions) {
		const classCssClass = data.player ? PlayerClasses.getCssClass(data.player.getPlayerClass()) : '';
		console.log(data.player ? data.player.getName() : 'Unassigned')
		const player = (
			<div className={clsx('player', classCssClass && `bg-${classCssClass}-dampened`)}>
				<div className="player-label">
					{!!data.player && <img className="player-icon" src={data.player.getSpecIcon()} draggable={false} />}
					<div className="player-details">
						<span className={clsx('player-name', classCssClass && `text-${classCssClass}`)}>
							{data.player ? data.player.getName() : 'Unassigned'}
						</span>
					</div>
				</div>
			</div>
		);

		return data.isDropdown ? (
			<Link as="button" className="dropdown-option">
				{player}
			</Link>
		) : (
			player
		);
	}
}
