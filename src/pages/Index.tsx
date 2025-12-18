import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'concerts', 'music', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const concerts = [
    { date: '15 января 2025', city: 'Москва', venue: 'Crocus City Hall', status: 'Билеты в продаже' },
    { date: '22 января 2025', city: 'Санкт-Петербург', venue: 'А2 Green Concert', status: 'Билеты в продаже' },
    { date: '28 января 2025', city: 'Казань', venue: 'Пирамида', status: 'Скоро в продаже' },
    { date: '5 февраля 2025', city: 'Екатеринбург', venue: 'Дивс', status: 'Скоро в продаже' },
  ];

  const releases = [
    { title: 'Новый альбом 2024', year: '2024', type: 'Альбом' },
    { title: 'Летние ночи', year: '2023', type: 'Сингл' },
    { title: 'Горизонт', year: '2023', type: 'EP' },
    { title: 'Дебютный альбом', year: '2022', type: 'Альбом' },
  ];

  const socials = [
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'Spotify', icon: 'Music', url: '#' },
    { name: 'VK', icon: 'MessageCircle', url: '#' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">АРТИСТ</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О артисте' },
                { id: 'concerts', label: 'Концерты' },
                { id: 'music', label: 'Музыка' },
                { id: 'contact', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-16 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-7xl font-bold tracking-tight leading-tight">VlaD LuRReN</h2>
                <p className="text-xl text-muted-foreground max-w-md">
                  Музыкант, композитор, исполнитель
                </p>
              </div>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('concerts')} size="lg" className="rounded-full">
                  Концерты
                </Button>
                <Button onClick={() => scrollToSection('music')} variant="outline" size="lg" className="rounded-full">
                  Слушать музыку
                </Button>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-2xl animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/photo_2025-11-01_18-17-42.jpg"
                alt="Артист"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold tracking-tight">О артисте</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>VlaD LuRReN - молодой музыкант из Нововоронежа, для которого музыка - не просто хобби, а способ говорить с миром на языке чувств. Его треки - это искренние истории, пропитанные глубиной и рефлексией. В каждой композиции - отпечаток личных переживаний, размышлений о жизни и поиске себя.</p>
              <p>Артист работает над своей музыкой и совершенствует ее, познает для себя новый звук. Он не стоит на месте и часто эксперементирует, что позволяет работать и с другими исполнителями. По мимо этого занимается дизайном и соц. сетями.</p>
              <p>
                Музыка артиста вдохновляет миллионы людей, его композиции звучат на
                радиостанциях и в плейлистах по всему миру. Сотрудничество с известными
                музыкантами и продюсерами позволяет создавать произведения мирового уровня.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="concerts" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold tracking-tight">Концерты</h2>
              <p className="text-xl text-muted-foreground">Предстоящие выступления</p>
            </div>
            <div className="space-y-4">
              {concerts.map((concert, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">{concert.date}</p>
                        <h3 className="text-2xl font-semibold">{concert.city}</h3>
                        <p className="text-muted-foreground">{concert.venue}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-sm px-4 py-2 rounded-full ${
                            concert.status === 'Билеты в продаже'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          {concert.status}
                        </span>
                        <Button variant="outline" className="rounded-full">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="music" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold tracking-tight">Музыка</h2>
              <p className="text-xl text-muted-foreground">Дискография</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {releases.map((release, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                      <Icon name="Music" size={64} className="text-primary/40" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{release.type} • {release.year}</p>
                      <h3 className="text-xl font-semibold">{release.title}</h3>
                    </div>
                    <Button variant="ghost" className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="Play" size={16} className="mr-2" />
                      Слушать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tight">Контакты</h2>
              <p className="text-xl text-muted-foreground">Следите за новостями в социальных сетях</p>
            </div>
            <div className="flex justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="group"
                  aria-label={social.name}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name={social.icon as any} size={24} />
                  </div>
                </a>
              ))}
            </div>
            <Separator className="my-12" />
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">Для сотрудничества и букинга:</p>
              <p className="text-2xl font-semibold text-foreground">booking@artist.com</p>
              <p className="text-lg">+7 (999) 123-45-67</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Имя Артиста. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;