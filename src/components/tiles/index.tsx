import * as React from 'react';

import {
	Grid,
	View,
	Heading
} from "@adobe/react-spectrum";

import {SECTIONS} from '../../data';

import './style.less'

interface ITilesPropTypes {

}

interface ITilesStateTypes {

}

export class Tiles extends React.Component<ITilesPropTypes, ITilesStateTypes> {
	private _renderSection = (section) => {
		return (
			<a
				key={section.key}
				href={`#section-${section.key}`}
				style={{
					pointerEvents: section.isReady ? 'auto' : 'none',
				}}>
				<View
					UNSAFE_className={[
						'vmv-service-tiles__item',
						!section.isReady && 'vmv-service-tiles__item__m-soon',
					].filter(Boolean).join(' ')}
					padding={{
						L: '2rem',
						base: '1rem'
					}}>
					<div
						className={'vmv-service-tiles__item__image'}
						style={{
							backgroundImage: `url(${section.image})`,
						}} />
					<Heading
						UNSAFE_className={'vmv-service-tiles__item__title'}>
						<span
							className={'vmv-service-tiles__item__title__text'}>
							{section.titleJSX}
						</span>
					</Heading>
				</View>
			</a>
		);
	}

	public render(): React.ReactNode {
		return (
			<Grid
				UNSAFE_className={'vmv-service-tiles'}
				id={'services'}
				columns={{
					L: ['1fr', '1fr', '1fr'],
					M: ['1fr', '1fr'],
					base: ['1fr']
				}}
				autoRows={'size-2400'}
				justifyContent="center"
				gap={'1rem'}>
				{SECTIONS.map(this._renderSection)}
			</Grid>
		);
	}
}
