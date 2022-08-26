import * as React from 'react';

import {
	Flex,
	View
} from "@adobe/react-spectrum";

import './style.less';

interface IFooterPropTypes {

}

interface IFooterStateTypes {

}

export class Footer extends React.Component<IFooterPropTypes, IFooterStateTypes> {
	protected static $START_YEAR = 2022;

	protected get $year(): number {
		return (new Date()).getFullYear();
	}

	public render(): React.ReactNode {
		return (
			<Flex
				UNSAFE_className={'vmv-service-footer'}
				direction="column">
				<Flex
					UNSAFE_className={'vmv-service-footer__bottom-row'}
					direction={{
						S: 'row',
						base: 'column'
					}}
					justifyContent={{
						S: 'start',
						base: 'center'
					}}
					gap="size-200">
					<View
						UNSAFE_className={'vmv-service-footer__bottom-row__links'}>
						<Flex
							direction="row"
							gap=".5rem">
							<a
								href={'#top'}>
								Наверх
							</a>
							{/*<a>Реквизиты</a>
							<a>Прайс-лист</a>*/}
						</Flex>
					</View>
					<View
						UNSAFE_className={'vmv-service-footer__bottom-row__copyright'}
						flex={1}>
						<View
							UNSAFE_className={'vmv-service-footer__bottom-row__copyright__text'}>
							© VMV service, {this.$year === Footer.$START_YEAR ? this.$year : `${Footer.$START_YEAR} — ${this.$year}`}
						</View>
						<View
							UNSAFE_className={'vmv-service-footer__bottom-row__copyright__disclaimer'}>
							<span style={{whiteSpace: 'nowrap'}}>Все права защищены.</span>{' '}
							Копирование материалов данного сайта разрешено только <span style={{whiteSpace: 'nowrap'}}>с согласия правообладателя</span>.
						</View>
					</View>
				</Flex>
			</Flex>
		);
	}
}
