import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const scooters = [
  {
    id: 1,
    name: 'CourierPro X1',
    price: '45 990',
    image: 'https://cdn.poehali.dev/projects/2f002de5-d5c5-4fca-9a93-c319be7e4101/files/78c41d47-7ea8-4450-920e-7b3dedd30a3b.jpg',
    range: '60 км',
    speed: '35 км/ч',
    load: '120 кг',
    power: '500W',
    popular: true
  },
  {
    id: 2,
    name: 'CourierPro Max',
    price: '64 990',
    image: 'https://cdn.poehali.dev/projects/2f002de5-d5c5-4fca-9a93-c319be7e4101/files/32900b60-5999-4c31-a3ce-811cd964f244.jpg',
    range: '85 км',
    speed: '45 км/ч',
    load: '150 кг',
    power: '1000W',
    popular: false
  },
  {
    id: 3,
    name: 'CourierPro Light',
    price: '34 990',
    image: 'https://cdn.poehali.dev/projects/2f002de5-d5c5-4fca-9a93-c319be7e4101/files/78c41d47-7ea8-4450-920e-7b3dedd30a3b.jpg',
    range: '45 км',
    speed: '25 км/ч',
    load: '100 кг',
    power: '350W',
    popular: false
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">CourierPro</div>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('catalog')}
              className={`text-sm transition-colors ${activeSection === 'catalog' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Каталог
            </button>
            <button 
              onClick={() => scrollToSection('warranty')}
              className={`text-sm transition-colors ${activeSection === 'warranty' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Гарантия
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className={`text-sm transition-colors ${activeSection === 'contacts' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Контакты
            </button>
          </div>
          <Button size="sm" className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold tracking-tight mb-6 leading-tight">
              Электросамокаты<br />для курьеров
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Надёжная техника для ежедневной работы.<br />
              Большой запас хода, высокая грузоподъёмность.
            </p>
            <Button 
              size="lg" 
              className="bg-black hover:bg-black/90 text-white px-8 h-12 text-base"
              onClick={() => scrollToSection('catalog')}
            >
              Выбрать модель
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Каталог</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {scooters.map((scooter) => (
              <Card key={scooter.id} className="overflow-hidden border-0 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-white p-8 relative">
                  {scooter.popular && (
                    <Badge className="absolute top-4 left-4 bg-[#0EA5E9] hover:bg-[#0EA5E9]">
                      Популярно
                    </Badge>
                  )}
                  <img 
                    src={scooter.image} 
                    alt={scooter.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{scooter.name}</h3>
                  <div className="text-3xl font-bold mb-6">{scooter.price} ₽</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Запас хода</div>
                      <div className="font-semibold">{scooter.range}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Скорость</div>
                      <div className="font-semibold">{scooter.speed}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Нагрузка</div>
                      <div className="font-semibold">{scooter.load}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Мощность</div>
                      <div className="font-semibold">{scooter.power}</div>
                    </div>
                  </div>

                  <Button className="w-full bg-black hover:bg-black/90">
                    Заказать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="warranty" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Гарантия</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24 месяца гарантии</h3>
                <p className="text-gray-600">
                  Полная гарантия производителя на все компоненты и электронику.
                  Бесплатное обслуживание в течение гарантийного периода.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Icon name="Wrench" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Сервисное обслуживание</h3>
                <p className="text-gray-600">
                  Сеть авторизованных сервисных центров по всей России.
                  Ремонт в течение 3-5 рабочих дней.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Icon name="RotateCcw" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Обмен и возврат</h3>
                <p className="text-gray-600">
                  14 дней на возврат или обмен без объяснения причин.
                  Полный возврат средств при обнаружении брака.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Доставка и настройка</h3>
                <p className="text-gray-600">
                  Бесплатная доставка по Москве и МО.
                  Настройка и инструктаж при получении.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Телефон</div>
                  <div className="text-xl font-semibold">+7 (495) 123-45-67</div>
                  <div className="text-sm text-gray-500 mt-1">Ежедневно 9:00 - 21:00</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <div className="text-xl font-semibold">info@courierpro.ru</div>
                  <div className="text-sm text-gray-500 mt-1">Ответим в течение часа</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Шоурум</div>
                  <div className="text-xl font-semibold mb-1">Москва</div>
                  <div className="text-sm text-gray-600">
                    ул. Большая Семёновская, 40<br />
                    БЦ "Семёновский"
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0EA5E9] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Telegram</div>
                  <div className="text-xl font-semibold">@courierpro_bot</div>
                  <div className="text-sm text-gray-500 mt-1">Консультация 24/7</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-8 bg-black text-white border-0">
            <h3 className="text-2xl font-semibold mb-4">Остались вопросы?</h3>
            <p className="text-gray-300 mb-6">
              Оставьте заявку, и мы перезвоним в течение 15 минут
            </p>
            <div className="flex gap-4">
              <input 
                type="tel" 
                placeholder="+7 (___) ___-__-__"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
              <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 px-8">
                Отправить
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2024 CourierPro. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-black transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
