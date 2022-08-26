import * as React from 'react';

import {
	Heading,
	Button,
} from "@adobe/react-spectrum";

import {SECTION_KEYS, SECTIONS} from "../../data";

import './style.less';

interface ISectionsPropTypes {

}

interface ISectionsStateTypes {

}

const CONTENT_MAP = {
	/* eslint-disable @typescript-eslint/no-var-requires */
	[SECTION_KEYS['SERVERS_ADMINISTRATION']]: require('./item-content/servers-administration').default,
	[SECTION_KEYS['NETWORK']]: require('./item-content/network').default,
	[SECTION_KEYS['WORKSPACE_SUPPORT']]: require('./item-content/workspace-support').default,
	[SECTION_KEYS['TECH_SETUP']]: require('./item-content/tech-setup').default,
	/* eslint-enable @typescript-eslint/no-var-requires */
}

export class Sections extends React.Component<ISectionsPropTypes, ISectionsStateTypes> {
	private _renderSection = (item) => {
		const Content = CONTENT_MAP[item.key];

		return (
			<div
				key={item.key}
				id={`section-${item.key}`}
				className={'vmv-service-sections__item'}>
				<div
					className={'vmv-service-sections__item__title'}>
					<div
						className={'vmv-service-sections__item__title__background'}
						style={{
							backgroundImage: `url(${item.image})`,
						}} />
					<div
						className={'vmv-service-sections__item__title__fade'} />
					<Heading
						UNSAFE_className={'vmv-service-sections__item__title__text'}
						level={2}>
						{item.title}
					</Heading>
					<div
						className={'vmv-service-sections__item__title__description'}>
						{item.descriptionShort}
					</div>
					<div
						className={'vmv-service-sections__item__title__button'}>
						<Button
							variant="cta"
							elementType="a"
							href="#contacts">
							{item?.callToAction?.contacts}
						</Button>
					</div>
				</div>
				<div
					className={'vmv-service-sections__item__content'}>
					{!!Content ? React.createElement(Content) : null}
					<div
						className={'vmv-service-sections__item__content__button'}>
						<Button
							variant="cta"
							elementType="a"
							href="#contacts">
							{item?.callToAction?.contacts}
						</Button>
					</div>
				</div>
			</div>
		);
	}

	public render(): React.ReactNode {
		return (
			<div
				className={'vmv-service-sections'}>
				{SECTIONS.filter(item => item.isReady).map(this._renderSection)}
			</div>
		);
	}
}
