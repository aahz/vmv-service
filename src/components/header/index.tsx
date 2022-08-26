import * as React from 'react';

import {
	Icon,
	Heading,
	Button,
} from '@adobe/react-spectrum';


import IconPhone from '@spectrum-icons/workflow/DevicePhone';
import IconEmail from '@spectrum-icons/workflow/Email';
import IconAddress from '@spectrum-icons/workflow/MapView';
import IconChevronDown from '@spectrum-icons/workflow/ChevronDown';

import {PHONE, EMAIL, ADDRESS, SECTIONS} from "../../data";

import './style.less';

interface IHeaderPropTypes {

}

interface IHeaderStateTypes {
	sectionIndex: number;
	lines: {key: string; height: string; left: number; opacity: number;}[],
	isCallToActionVisible: boolean;
	isScrolled: boolean;
}

function mapValue(value: number, [inputStart, inputEnd]: [number, number], [outputStart, outputEnd]: [number, number]): number {
	return outputStart + ((outputEnd - outputStart) / (inputEnd - inputStart)) * (value - inputStart)
}

export class Header extends React.Component<IHeaderPropTypes, IHeaderStateTypes> {
	public state: IHeaderStateTypes = {
		sectionIndex: 0,
		lines: [],
		isCallToActionVisible: true,
		isScrolled: window.scrollY >= 0,
	};

	protected $ref: {root: React.RefObject<HTMLDivElement>, callToAction: React.RefObject<HTMLDivElement>} = {
		root: React.createRef(),
		callToAction: React.createRef(),
	}

	private _changeCallToActionTimeoutId: number;

	public componentDidMount(): void {
		window.addEventListener('scroll', this._onScroll);

		this.setState({
			lines: Array.from(new Array(25)).map((v, index) => ({
				key: `line-${index}`,
				height: `${Math.min(Math.max(Math.random() * 100, 10), 90)}%`,
				left: Math.random() * this.$ref.root.current.offsetWidth,
				opacity: Math.random(),
			}))
		}, this._onScroll);

		this._changeCallToActionTimeoutId = window.setTimeout(this._changeCallToAction, 5000);
	}

	public componentWillUnmount(): void {
		window.clearTimeout(this._changeCallToActionTimeoutId);
		window.removeEventListener('scroll', this._onScroll);
	}

	private _changeCallToAction = () => {
		window.clearTimeout(this._changeCallToActionTimeoutId);



		const listener = () => {
			const search = SECTIONS.slice(this.state.sectionIndex + 1).findIndex(section => section.isReady);
			const index = this.state.sectionIndex + search + 1;

			this.setState({
				sectionIndex: search >= 0 ? index : 0,
				isCallToActionVisible: true,
			}, () => {
				this._changeCallToActionTimeoutId = window.setTimeout(this._changeCallToAction, 9000);
			});

			this.$ref.callToAction.current.removeEventListener('animationend', listener);
		}

		this.$ref.callToAction.current.addEventListener('animationend', listener);

		this.setState({
			isCallToActionVisible: false,
		});
	}

	private _onScroll = () => {
		const isScrolled = window.scrollY >= this.$ref.root.current.offsetHeight / 4;

		if (isScrolled !== this.state.isScrolled) {
			this.setState({isScrolled});
		}
	}

	private _renderImage(): React.ReactNode {
		return (
			<div
				className={'vmv-service-header__image'} />
		);
	}

	private _renderLines(): React.ReactNode {
		return (
			<div
				className={'vmv-service-header__lines'}>
				{this.state.lines.map((line) => (
					<div
						key={line.key}
						className={'vmv-service-header__lines__item'}
						style={{
							left: line.left,
							height: line.height,
							opacity: line.opacity,
							animationDuration: `${mapValue(line.opacity, [0, 1], [1, 7])}s`,
							filter: `blur(${Math.round(mapValue(line.opacity, [0, 1], [20, 5]))}px)`,
						}} />
				))}
			</div>
		);
	}

	private _renderLogo(): React.ReactNode {
		return (
			<a
				className={'vmv-service-header__logo'}
				href={'/'}>
				<div
					className={'vmv-service-header__logo__brand'}>
						<span
							className={'vmv-service-header__logo__brand__letter'}>
							V
						</span>
					<span
						className={'vmv-service-header__logo__brand__letter'}>
							M
						</span>
					<span
						className={'vmv-service-header__logo__brand__letter'}>
							V
						</span>
				</div>
				<div
					className={'vmv-service-header__logo__service'}>
					service
				</div>
			</a>
		);
	}

	private _renderContacts(): React.ReactNode {
		return (
			<dl
				className={'vmv-service-header__contacts'}>
				<dt
					className={'vmv-service-header__contacts__label'}>
					<Icon
						UNSAFE_className={'vmv-service-header__contacts__label__icon'}>
						<IconPhone />
					</Icon>
					Телефон
				</dt>
				<dd
					className={'vmv-service-header__contacts__value'}>
					{PHONE}
				</dd>
				<dt
					className={'vmv-service-header__contacts__label'}>
					<Icon
						UNSAFE_className={'vmv-service-header__contacts__label__icon'}>
						<IconEmail />
					</Icon>
					E-mail
				</dt>
				<dd
					className={'vmv-service-header__contacts__value'}>
					{EMAIL}
				</dd>
				<dt
					className={'vmv-service-header__contacts__label'}>
					<Icon
						UNSAFE_className={'vmv-service-header__contacts__label__icon'}>
						<IconAddress />
					</Icon>
					Адрес
				</dt>
				<dd
					className={'vmv-service-header__contacts__value'}>
					{ADDRESS}
				</dd>
			</dl>
		);
	}

	private _renderNavigation(): React.ReactNode {
		return (
			<div
				className={'vmv-service-header__navigation'}>
				<ul
					className={'vmv-service-header__navigation__menu'}>
					<li
						className={'vmv-service-header__navigation__menu__item'}>
						<a
							className={'vmv-service-header__navigation__menu__item__link'}
							href={'#services'}>
						Услуги
						</a>
					</li>
					{/*<li
						className={'vmv-service-header__navigation__menu__item'}>
						<a
							className={'vmv-service-header__navigation__menu__item__link'}
							href={'#about'}>
						О нас
						</a>
					</li>
					<li
						className={'vmv-service-header__navigation__menu__item'}>
						<a
							className={'vmv-service-header__navigation__menu__item__link'}
							href={'#reviews'}>
							Отзывы
						</a>
					</li>*/}
					<li
						className={'vmv-service-header__navigation__menu__item'}>
						<a
							className={'vmv-service-header__navigation__menu__item__link'}
							href={'#contacts'}>
							Контакты
						</a>
					</li>
				</ul>
			</div>
		);
	}

	private _renderCallToAction(): React.ReactNode {
		const section = SECTIONS[this.state.sectionIndex];

		return (
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					width: '100%',
					transform: 'translate(-50%, -50%)',
					perspective: '750px',
				}}>
				<div
					ref={this.$ref.callToAction}
					className={[
						'vmv-service-header__call-to-action',
						this.state.isCallToActionVisible && 'vmv-service-header__call-to-action__m-animate-in',
						!this.state.isCallToActionVisible && 'vmv-service-header__call-to-action__m-animate-out',
					].filter(Boolean).join(' ')}>
					<Heading
						UNSAFE_className={'vmv-service-header__call-to-action__title'}
						level={1}>
						{section?.title || 'У вас есть вопросы?'}
					</Heading>
					<div
						className={'vmv-service-header__call-to-action__description'}>
						{section?.descriptionShort || 'Мы предоставляем широкий спектр услуг высочайшего качества для ниших клиентов и не стесняемся этим гордиться!'}
					</div>
					<div
						className={'vmv-service-header__call-to-action__button'}>
						<Button
							variant="overBackground"
							href={!!section ? `#section-${section.key}` : '#contacts'}
							elementType="a">
							{
								!!section
									? section?.callToAction?.section
									: 'Свяжитесь с нами!'
							}
						</Button>
					</div>
				</div>
			</div>
		);
	}

	private _renderArrow(): React.ReactNode {
		return (
			<a
				className={'vmv-service-header__arrow'}
				href={'#services'}
				onClick={(event) => {
					event.preventDefault();

					window.scrollTo({
						top: this.$ref.root.current.offsetHeight,
					})
				}}>
				<Icon>
					<IconChevronDown />
				</Icon>
			</a>
		);
	}

	public render(): React.ReactNode {
		return (
			<div
				ref={this.$ref.root}
				id="top"
				className={[
					'vmv-service-header',
					this.state.isScrolled && 'vmv-service-header__m-scrolled',
				].filter(Boolean).join(' ')}>
				{this._renderImage()}
				{this._renderLines()}
				{this._renderLogo()}
				{this._renderContacts()}
				{this._renderNavigation()}
				{this._renderCallToAction()}
				{this._renderArrow()}
			</div>
		);
	}
}
