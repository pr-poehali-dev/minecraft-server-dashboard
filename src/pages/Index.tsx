import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(127);
  const [maxPlayers] = useState(500);
  const [currentPage, setCurrentPage] = useState('home');
  
  // Simulate real-time player count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => Math.max(50, Math.min(maxPlayers, prev + Math.floor(Math.random() * 21) - 10)));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxPlayers]);

  const serverStats = [
    { icon: 'Users', label: 'Онлайн игроков', value: `${onlinePlayers}/${maxPlayers}` },
    { icon: 'Clock', label: 'Аптайм', value: '99.8%' },
    { icon: 'Zap', label: 'TPS', value: '19.9' },
    { icon: 'Coins', label: 'Экономика', value: 'Активна' }
  ];

  const features = [
    { icon: 'Pickaxe', title: 'Выживание', description: 'Классический режим выживания с уникальными возможностями' },
    { icon: 'DollarSign', title: 'Экономика', description: 'Развитая торговая система и магазины игроков' },
    { icon: 'Shield', title: 'Защита', description: 'Система регионов и защиты территории' },
    { icon: 'Trophy', title: 'События', description: 'Регулярные ивенты и соревнования' }
  ];

  const navItems = [
    { name: 'Главная', icon: 'Home', page: 'home' },
    { name: 'Правила', icon: 'BookOpen', page: 'rules' },
    { name: 'Статистика', icon: 'BarChart3', page: 'stats' },
    { name: 'Форум', icon: 'MessageSquare', page: 'forum' },
    { name: 'Команда', icon: 'Users', page: 'team' }
  ];

  const rules = [
    {
      category: '📚 Основные правила',
      icon: 'BookOpen',
      rules: [
        { id: 1, title: 'Уважение к игрокам', description: 'Запрещены оскорбления, мат и токсичное поведение в чате и голосовом общении.' },
        { id: 2, title: 'Честная игра', description: 'Использование читов, багов и дюпов строго запрещено. Играйте честно!' },
        { id: 3, title: 'Один аккаунт на игрока', description: 'У каждого игрока может быть только один аккаунт на сервере.' },
        { id: 4, title: 'Русскоязычный чат', description: 'В общем чате разрешено общение только на русском языке.' }
      ]
    },
    {
      category: '🏠 Строительство и территории',
      icon: 'Home',
      rules: [
        { id: 5, title: 'Приват территории', description: 'Обязательно приватьте свои постройки с помощью команд региона.' },
        { id: 6, title: 'Расстояние между домами', description: 'Минимальное расстояние между постройками разных игроков - 50 блоков.' },
        { id: 7, title: 'Архитектура', description: 'Запрещены столбы в небо, нубские постройки и 1x1 домики.' },
        { id: 8, title: 'Природа', description: 'Не оставляйте летающие деревья и большие ямы. Восстанавливайте ландшафт.' }
      ]
    },
    {
      category: '💰 Экономика и торговля',
      icon: 'DollarSign',
      rules: [
        { id: 9, title: 'Честная торговля', description: 'Запрещено обманывать при торговле и занижать/завышать цены договорившись.' },
        { id: 10, title: 'Магазины', description: 'Магазины должны быть оформлены и работать исправно.' },
        { id: 11, title: 'Валюта сервера', description: 'Основная валюта - майнкоины. Бартер разрешён.' },
        { id: 12, title: 'Банкротство', description: 'При долгах более 1000 майнкоинов имущество может быть конфисковано.' }
      ]
    },
    {
      category: '⚔️ PvP и конфликты',
      icon: 'Sword',
      rules: [
        { id: 13, title: 'PvP зоны', description: 'PvP разрешено только в специально отведённых зонах и на аренах.' },
        { id: 14, title: 'Гриферство', description: 'Разрушение чужих построек без разрешения строго запрещено.' },
        { id: 15, title: 'Кража', description: 'Кража из незащищённых сундуков разрешена, но не приветствуется.' },
        { id: 16, title: 'Месть', description: 'Месть за PvP вне арен запрещена. Решайте конфликты мирно.' }
      ]
    }
  ];

  const renderRulesPage = () => (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-minecraft-white" style={{ fontFamily: 'Press Start 2P' }}>
            📋 ПРАВИЛА СЕРВЕРА
          </h1>
          <p className="text-xl text-minecraft-white/80 max-w-2xl mx-auto">
            Соблюдение правил обязательно для всех игроков. Незнание правил не освобождает от ответственности!
          </p>
        </div>

        <div className="grid gap-8">
          {rules.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="bg-minecraft-brown/90 border-4 border-minecraft-green animate-fade-in">
              <CardHeader>
                <CardTitle className="text-minecraft-white text-2xl flex items-center gap-3" style={{ fontFamily: 'Press Start 2P' }}>
                  <Icon name={section.icon as any} size={32} className="text-minecraft-green" />
                  {section.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {section.rules.map((rule, ruleIndex) => (
                    <div key={rule.id} className="bg-minecraft-black/30 p-6 rounded-lg border-2 border-minecraft-green/30 hover:border-minecraft-green transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-minecraft-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {rule.id}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-minecraft-white mb-2">{rule.title}</h3>
                          <p className="text-minecraft-white/80">{rule.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-minecraft-green/20 border-4 border-minecraft-green animate-fade-in">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-minecraft-white mb-4" style={{ fontFamily: 'Press Start 2P' }}>
              ⚠️ НАКАЗАНИЯ
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-minecraft-black/50 p-6 rounded-lg">
                <div className="text-yellow-400 text-2xl mb-2">🟡</div>
                <h3 className="text-minecraft-white font-bold mb-2">Предупреждение</h3>
                <p className="text-minecraft-white/80 text-sm">За мелкие нарушения</p>
              </div>
              <div className="bg-minecraft-black/50 p-6 rounded-lg">
                <div className="text-orange-400 text-2xl mb-2">🟠</div>
                <h3 className="text-minecraft-white font-bold mb-2">Мут/Кик</h3>
                <p className="text-minecraft-white/80 text-sm">За нарушение правил чата</p>
              </div>
              <div className="bg-minecraft-black/50 p-6 rounded-lg">
                <div className="text-red-400 text-2xl mb-2">🔴</div>
                <h3 className="text-minecraft-white font-bold mb-2">Бан</h3>
                <p className="text-minecraft-white/80 text-sm">За серьёзные нарушения</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setCurrentPage('home')}
            className="bg-minecraft-green hover:bg-minecraft-green/80 text-white border-2 border-minecraft-white/20 text-lg px-8 py-4"
          >
            🏠 Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );

  const renderHomePage = () => (
    <>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-bounce-in">
            <h1 className="text-6xl font-bold mb-6 text-minecraft-white" style={{ fontFamily: 'Press Start 2P' }}>
              CRAFTSERVER
            </h1>
            <p className="text-xl text-minecraft-white/80 mb-8 max-w-2xl mx-auto">
              Лучший сервер выживания с экономикой. Присоединяйся к сообществу из {maxPlayers} игроков!
            </p>
          </div>
          
          <div className="animate-fade-in">
            <Card className="bg-minecraft-brown/90 border-4 border-minecraft-green max-w-md mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-minecraft-white text-center" style={{ fontFamily: 'Press Start 2P' }}>
                  🌐 IP СЕРВЕРА
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="bg-minecraft-black/50 p-4 rounded-lg mb-4">
                    <code className="text-minecraft-green text-xl font-bold">play.craftserver.ru</code>
                  </div>
                  <Button 
                    className="bg-minecraft-green hover:bg-minecraft-green/80 text-white border-2 border-minecraft-white/20"
                    onClick={() => navigator.clipboard.writeText('play.craftserver.ru')}
                  >
                    📋 Скопировать IP
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-minecraft-black/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-minecraft-white" style={{ fontFamily: 'Press Start 2P' }}>
            📊 СТАТИСТИКА СЕРВЕРА
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serverStats.map((stat, index) => (
              <Card key={index} className="bg-minecraft-brown/80 border-2 border-minecraft-green hover:border-minecraft-white transition-all duration-200 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Icon name={stat.icon as any} size={32} className="text-minecraft-green mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold text-minecraft-white mb-2">{stat.label}</h3>
                  <p className="text-2xl font-bold text-minecraft-green" style={{ fontFamily: 'Press Start 2P' }}>
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Player Count Chart */}
          <Card className="mt-12 bg-minecraft-brown/80 border-2 border-minecraft-green">
            <CardHeader>
              <CardTitle className="text-minecraft-white text-center" style={{ fontFamily: 'Press Start 2P' }}>
                📈 ОНЛАЙН ИГРОКОВ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-32 bg-minecraft-black/30 rounded-lg p-4">
                <div className="absolute bottom-4 left-4 right-4">
                  <div 
                    className="bg-minecraft-green h-8 rounded-lg transition-all duration-1000 relative"
                    style={{ width: `${(onlinePlayers / maxPlayers) * 100}%` }}
                  >
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-sm font-bold">
                      {onlinePlayers}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-minecraft-white/60 text-sm">
                  Максимум: {maxPlayers}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-minecraft-white" style={{ fontFamily: 'Press Start 2P' }}>
            ⚡ ОСОБЕННОСТИ СЕРВЕРА
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-minecraft-brown/80 border-2 border-minecraft-green hover:border-minecraft-white transition-all duration-200 hover:scale-105 animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-minecraft-green/20 p-3 rounded-lg">
                      <Icon name={feature.icon as any} size={24} className="text-minecraft-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-minecraft-white mb-2">{feature.title}</h3>
                      <p className="text-minecraft-white/80">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-4 bg-minecraft-green/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-minecraft-white" style={{ fontFamily: 'Press Start 2P' }}>
            🚀 ГОТОВ К ПРИКЛЮЧЕНИЯМ?
          </h2>
          <p className="text-xl text-minecraft-white/80 mb-8 max-w-2xl mx-auto">
            Присоединяйся к нашему сообществу и начни своё эпическое приключение уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-minecraft-green hover:bg-minecraft-green/80 text-white border-2 border-minecraft-white/20 text-lg px-8 py-4"
            >
              🎮 Начать играть
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setCurrentPage('rules')}
              className="border-2 border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-white text-lg px-8 py-4"
            >
              📖 Читать правила
            </Button>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-stone to-minecraft-black">
      {/* Header */}
      <header className="bg-minecraft-brown/80 backdrop-blur-sm border-b-4 border-minecraft-green shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-minecraft-green text-2xl font-bold" style={{ fontFamily: 'Press Start 2P' }}>
                🧊 CRAFTSERVER
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentPage(item.page)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.page 
                      ? 'bg-minecraft-green text-white' 
                      : 'text-minecraft-white hover:bg-minecraft-green/20'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'rules' && renderRulesPage()}
      {currentPage === 'stats' && <div className="py-20 text-center text-minecraft-white">Страница статистики в разработке</div>}
      {currentPage === 'forum' && <div className="py-20 text-center text-minecraft-white">Форум в разработке</div>}
      {currentPage === 'team' && <div className="py-20 text-center text-minecraft-white">Страница команды в разработке</div>}

      {/* Footer */}
      <footer className="bg-minecraft-black/80 py-8 px-4 border-t-4 border-minecraft-green">
        <div className="container mx-auto text-center">
          <div className="text-minecraft-green font-bold mb-4" style={{ fontFamily: 'Press Start 2P' }}>
            🧊 CRAFTSERVER
          </div>
          <div className="flex justify-center space-x-8 text-minecraft-white/60">
            <span>© 2024 CraftServer</span>
            <span>|</span>
            <span>Версия 1.20.4</span>
            <span>|</span>
            <span>TPS: 19.9</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;