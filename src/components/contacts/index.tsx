import * as React from 'react';

import {ADDRESS_COORDINATES, ADDRESS_LINK, PHONE, EMAIL, WORKING_HOURS} from '../../data';

import './style.less';

interface IContactsPropTypes {

}

interface IContactsStateTypes {

}

export class Contacts extends React.Component<IContactsPropTypes, IContactsStateTypes> {
	public render(): React.ReactNode {
		return (
			<div
				id="contacts"
				className={'vmv-service-contacts'}>
				<div
					className={'vmv-service-contacts__map'}>
					<a
						className={'vmv-service-contacts__map__link'}
						style={{
							backgroundImage: `url(https://static-maps.yandex.ru/1.x/?ll=${encodeURIComponent(ADDRESS_COORDINATES.join(','))}&l=map&size=450,450&z=13&scale=1.0)`
						}}
						href={ADDRESS_LINK}
						target="_blank" />
					<div
						className={'vmv-service-contacts__map__point'} />
				</div>

				<div
					className={'vmv-service-contacts__data'}>
					<h1
						className={'vmv-service-contacts__data__title'}>
						Просто дайте нам знать о ваших задачах любым удобным способом
					</h1>
					<h2
						className={'vmv-service-contacts__data__subtitle'}>
						Всё остальное — наша забота!
					</h2>

					<div
						className={'vmv-service-contacts__data__variant'}>
						<h3
							className={'vmv-service-contacts__data__variant__title'}>
							Телефон
						</h3>
						<div
							className={'vmv-service-contacts__data__variant__value'}>
							{PHONE}
						</div>
					</div>


					<div
						className={'vmv-service-contacts__data__variant'}>
						<h3
							className={'vmv-service-contacts__data__variant__title'}>
							Электронная почта
						</h3>
						<div
							className={'vmv-service-contacts__data__variant__value'}>
							{EMAIL}
						</div>
					</div>

					<div
						className={'vmv-service-contacts__data__variant'}>
						<h3
							className={'vmv-service-contacts__data__variant__title'}>
							Часы работы
						</h3>
						<div
							className={'vmv-service-contacts__data__variant__value'}>
							{WORKING_HOURS}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
