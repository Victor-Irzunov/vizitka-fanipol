import Image from 'next/image';
import BtnComp from '@/components/btn/BtnComp';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" id='main'>
      <div className='w-full min-h-screen bg-cover fon bg-center' />

      <section className='container mx-auto relative min-h-[85vh] xz:pt-16 xs:pt-24'>
        <div className='w-full'>
          <div className='pt-20 text-white text-center'>
            <h1 className='font-bold xx:text-5xl xz:text-4xl sd:text-6xl uppercase tracking-wider'>
              <span className='xz:text-6xl sd:text-6xl xz:blok sd:inline'>Аренда </span>
              фронтального погрузчика
            </h1>

            <p className='uppercase xx:text-base xz:text-base sd:text-xl mt-6 text-white'>
              Держинский район
            </p>

            <ul className='mt-16 bg-black/40 text-white inline-block px-8 py-3 xz:text-lg sd:text-3xl'>
              <li className='mb-2 '>
                Грузопъёмность <strong>5 тонн</strong>
              </li>
              <li className='mb-4'>
                Объём ковша <strong>3 м<small>3</small></strong>
              </li>
              <li className='mb-1'>
                Режим работы:<br /> <strong>пн-вс 8:00-21:00</strong>
              </li>
              <li className='mb-2 uppercase'>
                Без выходных
              </li>
            </ul>

            <p className='uppercase mt-10 text-2xl font-semibold text-white'>
              Наличный и безналичный расчёт
            </p>
          </div>
          <div className='absolute -bottom-20 right-8'>
            <Image src='/main/2.webp' alt='лучшая цена на аренду погрузчика' width={100} height={63} />
          </div>
        </div>
      </section>


      <section className='relative xz:py-10 xs:pt-24 bg-white w-full mt-24' id='about'>
        <article className='container mx-auto'>
          <Image src='/logo/logo-mini.webp' alt='логотип компании по прокату погрузчика' width={130} height={130} className='float-left pr-4 pb-1' />
          <h5 className='uppercase font-bold mb-2 text-lg'>
            О компании
          </h5>

          <div className='text-justify'>

            <p className='mb-2'>
              Добро пожаловать в нашу компанию! Мы - команда профессионалов, специализирующихся на предоставлении высококачественных услуг по прокату погрузчика. Наш директор, Геннадий Александрович Бельский, вдохновляет нас на постоянное совершенствование и развитие. С момента основания в 2015 году мы стремились к достижению выдающихся результатов, и с годами наши достижения только укрепили нашу позицию в индустрии.
            </p>
            <h6 className='font-semibold mt-6 mb-2'>
              Наши Преимущества:
            </h6>
            <p className='mb-2'>
              <span className='font-semibold'>
                Исправная Техника:
              </span>{' '}
              Мы гордимся состоянием нашей техники. Все наши погрузчики проходят регулярное обслуживание и технические проверки, чтобы гарантировать надежную работу.
            </p>
            <p className='mb-2'>
              <span className='font-semibold'>
                Быстрая Подача:
              </span>{' '}
              Мы ценим ваше время, поэтому предлагаем быструю подачу погрузчиков на объекты. Мы готовы к работе, когда вам это удобно.
            </p>
            <p className='mb-2'>
              <span className='font-semibold'>
                Хорошие Цены и Условия:
              </span>{' '}
              Мы предлагаем конкурентоспособные цены и гибкие условия аренды, чтобы удовлетворить потребности всех клиентов.
            </p>
            <p className='mb-2'>
              <span className='font-semibold'>
                Опытные Водители:
              </span>{' '}
              Наши водители - высококвалифицированные специалисты с многолетним опытом работы на погрузчиках. Они гарантируют безопасность и эффективность вашего проекта.
            </p>
            <p className='mb-2'>
              <span className='font-semibold'>
                Ответственный и Опытный Директор:
              </span>{' '}
              Геннадий Александрович Бельский - наш ответственный и опытный директор, который следит за каждым этапом выполнения заказов и стремится к достижению лучших результатов.
            </p>
            <p className='mt-4 font-semibold'>
              Мы гордимся своей репутацией надежного партнера в сфере проката погрузчиков и готовы предоставить вам наши услуги. Независимо от вашего проекта, мы предлагаем выдающееся качество и удовлетворение ваших потребностей. Надеемся на сотрудничество с вами!
            </p>
          </div>
        </article>
      </section>


      <section className='relative py-24 w-full bg-white' id='uslugi'>
        <div className='container mx-auto'>
          <div className='text-center'>
            <p className='font-light text-sm uppercase'>
              услуги
            </p>
            <h4 className='text-2xl uppercase'>
              ФРОНТАЛЬНЫЙ ПОГРУЗЧИК XCMG LW541F
            </h4>
          </div>

          <div className='mt-8 sd:flex'>
            <div className='sd:w-1/2 xz:w-full'>
              <Image src='/main/4.webp' alt='ПОГРУЗЧИК XCMG LW541F' className='mx-auto' width={350} height={347} />
            </div>

            <div className='sd:mt-0 xz:mt-6 sd:w-1/2 xz:w-full'>
              <ul className=''>
                <li className='text-[#aa8d61] uppercase border-dotted border-b py-1 border-black'>
                  Технические характеристики
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Грузоподъемность, кг
                  </span>
                  <span className='font-bold'>
                    5000
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Объем ковша, куб. м.
                  </span>
                  <span className='font-bold'>
                    3,0
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Высота выгрузки, м
                  </span>
                  <span className='font-bold'>
                    3090
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Время подъема, сек
                  </span>
                  <span className='font-bold'>
                    6,5
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Радиус поворота, мм
                  </span>
                  <span className='font-bold'>
                    6250
                  </span>
                </li>
              </ul>

              <ul className='mt-3'>
                <li className='text-[#aa8d61] uppercase border-dotted border-b py-1 border-black'>
                  ХОДОВЫЕ КАЧЕСТВА
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Двигатель
                  </span>
                  <span className='font-bold'>
                    WD615 67G3-36
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Мощность двигателя, л.с.
                  </span>
                  <span className='font-bold'>
                    220
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Макс. скорость передвижения, км/ч
                  </span>
                  <span className='font-bold'>
                    16,5
                  </span>
                </li>
              </ul>

              <ul className='mt-3'>
                <li className='text-[#aa8d61] uppercase border-dotted border-b py-1 border-black'>
                  ГАБАРИТНЫЕ РАЗМЕРЫ, ММ
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Длина
                  </span>
                  <span className='font-bold'>
                    7893
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Ширина
                  </span>
                  <span className='font-bold'>
                    3000
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Высота
                  </span>
                  <span className='font-bold'>
                    3440
                  </span>
                </li>
                <li className='text-gray-700 border-dotted border-b py-1 border-black flex justify-between'>
                  <span>
                    Полная масса, кг
                  </span>
                  <span className='font-bold'>
                    16200
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <article className='mt-8 text-justify sd:text-sm font-light xz:text-xs container mx-auto'>
          <p className='mb-2'>
            Фронтальный погрузчик XCMG LW541F - это мощная и надежная спецтехника, которая находится в числе лучших в своем классе. Этот погрузчик разработан для выполнения широкого спектра задач в строительстве, горнодобывающей промышленности, а также в других отраслях, требующих эффективного и надежного грузоперевозчика.
          </p>
          <p className='mb-2'>
            XCMG LW541F привлекает внимание своей производительностью и надежностью. Снабженный мощным дизельным двигателем, он способен эффективно справляться с перевозкой больших грузов. Благодаря прочной конструкции и высокой проходимости, погрузчик XCMG LW541F может работать в самых сложных условиях, включая грунтовые и строительные площадки.
          </p>
          <p className='mb-2'>
            Одной из главных характеристик этой модели является вместительный ковш с большим объемом. Это позволяет быстро и эффективно перемещать материалы, сокращая время выполнения задач. Операторский кабинет просторный и комфортабельный, что создает условия для удобной и продуктивной работы.
          </p>
          <p className='mb-2'>
            Помимо превосходной производительности, XCMG LW541F обладает высокой степенью надежности и долговечности. Машина разработана для долгосрочной эксплуатации без серьезных поломок. Это позволяет снизить операционные расходы и обеспечить бесперебойную работу.
          </p>
          <p className='mb-2'>
            Компактные размеры и маневренность фронтального погрузчика XCMG LW541F делают его отличным выбором для задач в ограниченных пространствах. Он способен легко маневрировать в тесных условиях и работать с высокой точностью.
          </p>
          <p className='mb-2 font-semibold'>
            В заключение, фронтальный погрузчик XCMG LW541F представляет собой выдающуюся технику для грузоперевозок и погрузочных работ. Его превосходная производительность, надежность и долговечность делают его идеальным выбором для различных отраслей и проектов, требующих эффективной и надежной спецтехники.
          </p>
        </article>
      </section>


      <section className="container mx-auto relative py-24 text-center text-white ">
        <div className='border-dashed border-white px-4 py-10 border-2 rounded-lg'>
          <Image src='/repair.svg' alt='услуги по ремонту автомобилей' className='mx-auto' width={100} height={100} />
          <p className="mb-6 mt-4 uppercase sd:text-3xl xz:text-xl font-light">
            Оказываем услуги по ремонту автомобилей
          </p>
          <p className='sd:text-3xl xz:text-xl font-semibold'>
            КАМАЗ • Маз • Газ • МТЗ • АМКАДОР
          </p>
        </div>

        <div className='mt-20 border-dashed border-white px-4 py-10 border-2 rounded-lg'>
          <Image src='/Setup.svg' alt='услуги по ремонту автомобилей' className='mx-auto' width={130} height={130} />
          <p className="mb-6 uppercase sd:text-3xl xz:text-xl font-light">
            Продаем автозапчасти и аккумуляторы
          </p>
          <p className='font-semibold sd:text-3xl xz:text-xl'>
            КАМАЗ • Маз • Газ • МТЗ • АМКАДОР
          </p>
        </div>

        <p className="text-center xz:text-lg sd:text-3xl font-semibold text-white mt-32">
          Нужен погрузчик? <br /> Свяжитесь с нами по номеру <br /> <a href="tel:80293293594" className="font-bold">☎{' '} +375 29 329-35-94</a> <br /> для заказа услуги фронтального погрузчика уже сегодня.
        </p>
      </section>


    </main>
  )
}
