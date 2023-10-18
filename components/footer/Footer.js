'use client'
import telegram from '../../public/social-icon/telegram.svg'
import viber from '../../public/social-icon/viber.svg'
import instagram from '../../public/social-icon/instagram.svg'
import { useScreens } from '@/constants/constants'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'

const Footer = () => {
	const screens = useScreens()
	return (
		<footer className="mt-auto relative pt-6 pb-3 bg-yellow-400" id='contact'>
			<div className="container mx-auto">
				<div className='flex justify-between items-start text-black flex-wrap'>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid text-lg'>
							Информация
						</p>
						<ul className='no-underline list-none pl-0'>
							<li className='no-underline list-none'>
								<LinkScroll to='about'
									className="cursor-pointer"
									smooth={true}
									offset={-100}
									duration={800}
								>
									О компании
								</LinkScroll>
							</li>
						</ul>
					</div>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid text-lg'>
							Контакты
						</p>
						<p>
							<a href='tel:80293293594' className=''>
								+375 29 329-35-94
							</a>
						</p>
						<p>
							<a href='tel:80445992814' className=''>
								+375 44 599-28-14
							</a>
						</p>

					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							Юр. адрес
						</p>
						<p>
							г. Фаниполь ул. Заводская 9а
						</p>
					</div>
					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							График работы
						</p>
						<p>
							Пн-Вс - 08:00 - 21:00
						</p>
						<p>
							без выходных
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							Мы в соц. сетях
						</p>
						<div className='flex justify-evenly items-center pt-3'>
							<a href='https://www.instagram.com/' target='_blank' >
								<Image src={instagram} width={25} alt='иконка инстаграма' />
							</a>
							<a href={`${screens.md ? 'https://t.me/' : 'https://t.me/@'}`} target='_blank' >
								<Image src={telegram} width={25} alt='иконка телеграма' />
							</a>
							<a href='viber://chat?number=%2B375' target='_blank' >
								<Image src={viber} width={25} alt='иконка вайбера' />
							</a>
						</div>
					</div>
				</div>

				<div className='font-light w-full text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
					<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
						Реквизиты
					</p>
					<div className='pt-3 text-sm'>
						<p className='mb-1'>
							ИП "Бельский Геннадий Александрович"
						</p>
						<p className='mb-1'>
							Действует на основании Свидетельства о государственной регистрации индивидуального предпринимателя  № 691616949 от 07 апреля  2016г. выданного Дзержинским райисполкомом
						</p>
						<p className='mb-1'>
							Юридический адрес:  РБ, 222750, Минская обл., Дзержинский р-н,
							г. Фаниполь, ул. Мира, д. 3, кв. 94
						</p>
						<p className='mb-1'>
							Почтовый адрес: РБ, 222751, Минская обл., Дзержинский р-н,
							г. Фаниполь, ул. Комсомольская, д. 84, оф. 33

						</p>
						<p className='mb-1 font-semibold'>
							р/с BY05 OLMP 3013 1000 5412 3000 0933
						</p>
						<p className='mb-1'>
							в ЦБУ № 505 ОАО «Белгазпромбанк» г. Фаниполь, ул. Зеленая, 2 Г
						</p>
						<p className='mb-1 font-semibold'>
							УНП 691616949
						</p>
					</div>
				</div>

				<div className='border-t border-black pt-2 mt-5'>
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A13d355b7b6124a45cd861ddc1f20b9efe325c82dfae5574f3cb461828923912c&amp;source=constructor" width="100%" height="300" frameBorder="0"></iframe>
				</div>

				<div
					className='mt-6 border-t border-black pt-2'
				>
					<p className='text-black/50 xs:text-xs xz:text-[10px]' >Copyright © 2015-2023 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-blue-700 no-underline'> VI:TECH</a>
					</p>
				</div>
			</div>
		</footer >
	)
}


export default Footer
