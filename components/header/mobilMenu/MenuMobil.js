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
			<nav className='h-full pt-10'>
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
				<Image src='/logo/logo.webp' alt='логотип' width={200} height={50} />
			</div>
		</div>
	)
}
