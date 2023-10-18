// "use client"
// import { useState } from 'react'
import { Divider } from 'antd'
import Image from 'next/image'
// import { ToolOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'

export const MenuMobil = ({ onClose }) => {
	// const [isOpen, setIsOpen] = useState(false)

	// const showDrawerMenuMobil = () => {
	// 	setIsOpen(true)
	// }


	return (
		<div className='h-full flex flex-col justify-between'>

			<nav className='pt-10'>
				<ul className='h-full uppercase text-lg cursor-pointer'>
					<li className='mb-5'>
						<LinkScroll to='main'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
							smooth={true}
							offset={-100}
							duration={800}
						>
							Главная
						</LinkScroll>
					</li>

					<li className='mb-5'>
						<LinkScroll to='uslugi'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
							smooth={true}
							offset={-100}
							duration={800}
						>
							Услуги погрузчика
						</LinkScroll>
					</li>
					<li className='mb-5'>
						<LinkScroll to='about'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
							smooth={true}
							offset={-100}
							duration={800}
						>
							О компании
						</LinkScroll>
					</li>

					<li className='mb-5'>
						<LinkScroll to='contact'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
							smooth={true}
							offset={-100}
							duration={800}
						>
							Контакты
						</LinkScroll>
					</li>
				</ul>
			</nav>

			<div className=''>
				<div className='flex mb-3'>
					<a href='tel:80293293594' className='text-xl mr-3'>
						+375 29 329-35-94
					</a>
					<Image src='/a1.svg' alt='оператор А1' width={20} height={20} />
				</div>
				<div className='flex'>
					<a href='tel:80445992814' className='text-xl mr-3'>
						+375 44 599-28-14
					</a>
					<Image src='/a1.svg' alt='оператор А1' width={20} height={20} />
				</div>
			</div>

			<div className=''>
				<Image src='/logo/logo.webp' alt='логотип' width={200} height={50} />
			</div>
		</div>
	)
}
