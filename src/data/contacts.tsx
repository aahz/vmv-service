import * as React from 'react';

export const PHONE_RAW = '+79150307111';

export const PHONE = (
	<>
		<a
			href={`tel:${PHONE_RAW}`}>
			+7 915 03 07 111
		</a>
	</>
);

export const EMAIL_RAW = "info@vmv-service.ru";

export const EMAIL = (
	<>
		<a
			href={`javascript:location='mailto:${(
				EMAIL_RAW
					.split(''))
					.map(char => {
						return `\\u${[
							'0', '0', '0', '0',
							...String(char).charCodeAt(0).toString(16).split('')
						].slice(-4).join('')}`;
					})
				.join('')
			}?subject=Обращение с сайта';void 0`}>
			info [at] vmv-service.ru
		</a>
	</>
);

export const WORKING_HOURS = 'Пн-Пт 10:00 – 18:00';

export const ADDRESS_COORDINATES = [37.755725, 55.666457];

export const ADDRESS_ZIP_CODE = '109451';

export const ADDRESS_CITY = 'Москва';

export const ADDRESS_BUILDING = 'ул. Верхние поля д.28';

export const ADDRESS_RAW = [ADDRESS_ZIP_CODE, ADDRESS_CITY, ADDRESS_BUILDING].join(', ');

export const ADDRESS_LINK = `https://yandex.ru/maps/?text=${window.decodeURIComponent(ADDRESS_RAW)}`

export const ADDRESS = (
	<>
		<a
			href={ADDRESS_LINK}
			target="_blank">
			<span
				style={{
					display: 'var(--full-address-display)',
					whiteSpace: 'pre-wrap',
				}}>
				{ADDRESS_ZIP_CODE}{', '}
				{ADDRESS_CITY}{', '}
			</span>
			{ADDRESS_BUILDING}
		</a>
	</>
);
