import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(127);
  const [maxPlayers] = useState(500);
  const [currentPage, setCurrentPage] = useState('home');
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [staffApplication, setStaffApplication] = useState({
    age: '',
    fullName: '',
    position: '',
    workExperience: '',
    skills: '',
    about: ''
  });
  
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
        { id: 1, title: 'Уважение к игрокам', description: 'Запрещены оскорбления, мат и токсичное поведение в чате и голосовом общении. Наказание: мут 30 мин - 24 часа.' },
        { id: 2, title: 'Честная игра', description: 'Использование любых читов, багов и дюпов строго запрещено. Наказание: бан 14 дней.' },
        { id: 3, title: 'Один аккаунт на игрока', description: 'У каждого игрока может быть только один аккаунт на сервере. Наказание: бан доп. аккаунтов.' },
        { id: 4, title: 'Русскоязычный чат', description: 'В общем чате разрешено общение только на русском языке. Наказание: предупреждение.' }
      ]
    },
    {
      category: '🏠 Строительство и территории',
      icon: 'Home',
      rules: [
        { id: 5, title: 'Приват территории', description: 'Желательно приватить свои постройки с помощью команд региона. За кражу из неприваченных сундуков наказания НЕ предусмотрено.' },
        { id: 6, title: 'Расстояние между домами', description: 'Минимальное расстояние между постройками разных игроков - 100 блоков. Нарушение: снос постройки + предупреждение.' },
        { id: 7, title: 'Архитектура', description: 'Запрещены столбы в небо, нубские постройки и 1x1 домики. Наказание: снос + предупреждение.' },
        { id: 8, title: 'Природа и Bedrock', description: 'Не оставляйте летающие деревья и большие ямы. Bedrock запрещён к установке. Наказание: бан 1 день.' }
      ]
    },
    {
      category: '💰 Экономика и торговля',
      icon: 'DollarSign',
      rules: [
        { id: 9, title: 'Честная торговля', description: 'Запрещено обманывать при торговле и занижать/завышать цены договорившись. Наказание: бан 3 дня.' },
        { id: 10, title: 'Магазины', description: 'Магазины должны быть оформлены и работать исправно. Наказание: снос магазина.' },
        { id: 11, title: 'Валюта сервера', description: 'Основная валюта - майнкоины. Бартер разрешён.' },
        { id: 12, title: 'Банкротство', description: 'При долгах более 1000 майнкоинов имущество может быть конфисковано. Наказание: конфискация.' }
      ]
    },
    {
      category: '⚔️ PvP и конфликты',
      icon: 'Sword',
      rules: [
        { id: 13, title: 'PvP зоны', description: 'PvP разрешено только в специально отведённых зонах и на аренах. Наказание: бан 1 день.' },
        { id: 14, title: 'Гриферство', description: 'Разрушение чужих построек без разрешения строго запрещено. Наказание: бан 7 дней.' },
        { id: 15, title: 'Кража', description: 'Кража из незащищённых сундуков разрешена, но не приветствуется.' },
        { id: 16, title: 'Месть', description: 'Месть за PvP вне арен запрещена. Решайте конфликты мирно. Наказание: предупреждение.' }
      ]
    }
  ];

  const renderForumPage = () => (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-minecraft-white" style={{ fontFamily: 'Press Start 2P' }}>
            💬 ФОРУМ СЕРВЕРА
          </h1>
          <p className="text-xl text-minecraft-white/80 max-w-2xl mx-auto">
            Обсуждения, заявки, жалобы и общение с сообществом CraftServer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Staff Recruitment */}
          <Card className="bg-minecraft-brown/90 border-4 border-minecraft-green hover:border-minecraft-white transition-all duration-200 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-minecraft-white text-xl flex items-center gap-3">
                <Icon name="Crown" size={28} className="text-yellow-400" />
                Набор в персонал
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-minecraft-white/80 mb-4">
                Хочешь стать частью команды? Подай заявку на должность модератора или помощника!
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-minecraft-green" />
                  <span className="text-minecraft-white/70 text-sm">Модератор</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-minecraft-green" />
                  <span className="text-minecraft-white/70 text-sm">Помощник</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Hammer" size={16} className="text-minecraft-green" />
                  <span className="text-minecraft-white/70 text-sm">Строитель</span>
                </div>
              </div>
              <Button 
                onClick={() => setShowStaffForm(true)}
                className="w-full bg-minecraft-green hover:bg-minecraft-green/80"
              >
                📝 Подать заявку
              </Button>
            </CardContent>
          </Card>

          {/* Player Reports */}
          <Card className="bg-minecraft-brown/90 border-4 border-red-500 hover:border-minecraft-white transition-all duration-200 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-minecraft-white text-xl flex items-center gap-3">
                <Icon name="AlertTriangle" size={28} className="text-red-400" />
                Жалобы на игроков
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-minecraft-white/80 mb-4">
                Сообщи о нарушителях правил сервера. Приложи скриншоты как доказательство.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="MessageSquareWarning" size={16} className="text-red-400" />
                  <span className="text-minecraft-white/70 text-sm">Токсичность в чате</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} className="text-red-400" />
                  <span className="text-minecraft-white/70 text-sm">Использование читов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Home" size={16} className="text-red-400" />
                  <span className="text-minecraft-white/70 text-sm">Гриферство</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
                🚨 Подать жалобу
              </Button>
            </CardContent>
          </Card>

          {/* Appeal Punishments */}
          <Card className="bg-minecraft-brown/90 border-4 border-orange-500 hover:border-minecraft-white transition-all duration-200 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-minecraft-white text-xl flex items-center gap-3">
                <Icon name="Scale" size={28} className="text-orange-400" />
                Обжалование наказаний
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-minecraft-white/80 mb-4">
                Считаешь наказание несправедливым? Подай апелляцию с доказательствами.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="FileText" size={16} className="text-orange-400" />
                  <span className="text-minecraft-white/70 text-sm">Неправомерный бан</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-orange-400" />
                  <span className="text-minecraft-white/70 text-sm">Сокращение срока</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-orange-400" />
                  <span className="text-minecraft-white/70 text-sm">Полная отмена</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                ⚖️ Подать апелляцию
              </Button>
            </CardContent>
          </Card>

          {/* General Discussions */}
          <Card className="bg-minecraft-brown/90 border-4 border-blue-500 hover:border-minecraft-white transition-all duration-200 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-minecraft-white text-xl flex items-center gap-3">
                <Icon name="MessageCircle" size={28} className="text-blue-400" />
                Общие обсуждения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-minecraft-white/80 mb-4">
                Обсуждай игру, делись постройками и общайся с другими игроками!
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Image" size={16} className="text-blue-400" />
                  <span className="text-minecraft-white/70 text-sm">Скриншоты построек</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Lightbulb" size={16} className="text-blue-400" />
                  <span className="text-minecraft-white/70 text-sm">Идеи для сервера</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-blue-400" />
                  <span className="text-minecraft-white/70 text-sm">Поиск друзей</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                💭 Открыть топик
              </Button>
            </CardContent>
          </Card>

          {/* Events */}
          <Card className="bg-minecraft-brown/90 border-4 border-purple-500 hover:border-minecraft-white transition-all duration-200 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-minecraft-white text-xl flex items-center gap-3">
                <Icon name="Calendar" size={28} className="text-purple-400" />
                События и конкурсы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-minecraft-white/80 mb-4">
                Участвуй в ивентах сервера и выигрывай ценные призы!
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Trophy" size={16} className="text-purple-400" />
                  <span className="text-minecraft-white/70 text-sm">Конкурсы построек</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} className="text-purple-400" />
                  <span className="text-minecraft-white/70 text-sm">PvP турниры</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Gift" size={16} className="text-purple-400" />
                  <span className="text-minecraft-white/70 text-sm">Раздачи призов</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                🎉 Смотреть события
              </Button>
            </CardContent>
          </Card>

          {/* Technical Support */}
          <Card className="bg-minecraft-brown/90 border-4 border-minecraft-green hover:border-minecraft-white transition-all duration-200 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-minecraft-white text-xl flex items-center gap-3">
                <Icon name="Settings" size={28} className="text-minecraft-green" />
                Техническая поддержка
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-minecraft-white/80 mb-4">
                Нужна помощь с подключением или возникли технические проблемы?
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Wifi" size={16} className="text-minecraft-green" />
                  <span className="text-minecraft-white/70 text-sm">Проблемы подключения</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Download" size={16} className="text-minecraft-green" />
                  <span className="text-minecraft-white/70 text-sm">Установка модов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="HelpCircle" size={16} className="text-minecraft-green" />
                  <span className="text-minecraft-white/70 text-sm">Общие вопросы</span>
                </div>
              </div>
              <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/80">
                🔧 Получить помощь
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-minecraft-black/30 border-2 border-minecraft-green/50 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-minecraft-white mb-6 text-center" style={{ fontFamily: 'Press Start 2P' }}>
              📋 ПРАВИЛА ФОРУМА
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-minecraft-green font-bold mb-3">✅ Разрешено:</h3>
                <ul className="text-minecraft-white/80 text-sm space-y-1">
                  <li>• Конструктивные обсуждения</li>
                  <li>• Помощь другим игрокам</li>
                  <li>• Предложения по улучшению сервера</li>
                  <li>• Демонстрация своих построек</li>
                </ul>
              </div>
              <div>
                <h3 className="text-red-400 font-bold mb-3">❌ Запрещено:</h3>
                <ul className="text-minecraft-white/80 text-sm space-y-1">
                  <li>• Спам и флуд сообщениями</li>
                  <li>• Оскорбления и токсичность</li>
                  <li>• Реклама других серверов</li>
                  <li>• Ложные жалобы и обвинения</li>
                </ul>
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

  const renderStaffApplicationForm = () => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <Card className="bg-minecraft-brown border-4 border-minecraft-green w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="text-minecraft-white text-2xl flex items-center gap-3" style={{ fontFamily: 'Press Start 2P' }}>
            <Icon name="Crown" size={32} className="text-yellow-400" />
            Заявка в персонал
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-minecraft-white font-bold mb-2 block">
              1. Сколько вам лет? <span className="text-red-400">(Минимум 11 лет)</span>
            </label>
            <input
              type="number"
              min="11"
              value={staffApplication.age}
              onChange={(e) => setStaffApplication({...staffApplication, age: e.target.value})}
              className="w-full p-3 bg-minecraft-black/50 border-2 border-minecraft-green text-minecraft-white rounded"
              placeholder="Введите ваш возраст"
            />
          </div>

          <div>
            <label className="text-minecraft-white font-bold mb-2 block">
              2. Как вас зовут? (ФИО)
            </label>
            <input
              type="text"
              value={staffApplication.fullName}
              onChange={(e) => setStaffApplication({...staffApplication, fullName: e.target.value})}
              className="w-full p-3 bg-minecraft-black/50 border-2 border-minecraft-green text-minecraft-white rounded"
              placeholder="Фамилия Имя Отчество"
            />
          </div>

          <div>
            <label className="text-minecraft-white font-bold mb-2 block">
              3. На кого вы хотите?
            </label>
            <select
              value={staffApplication.position}
              onChange={(e) => setStaffApplication({...staffApplication, position: e.target.value})}
              className="w-full p-3 bg-minecraft-black/50 border-2 border-minecraft-green text-minecraft-white rounded"
            >
              <option value="">Выберите должность</option>
              <option value="Модератор">Модератор</option>
              <option value="Помощник">Помощник</option>
              <option value="Строитель">Строитель</option>
            </select>
          </div>

          <div>
            <label className="text-minecraft-white font-bold mb-2 block">
              4. Где вы уже работали и кем?
            </label>
            <textarea
              value={staffApplication.workExperience}
              onChange={(e) => setStaffApplication({...staffApplication, workExperience: e.target.value})}
              className="w-full p-3 bg-minecraft-black/50 border-2 border-minecraft-green text-minecraft-white rounded h-24"
              placeholder="Опишите ваш опыт работы на других серверах или проектах"
            />
          </div>

          <div>
            <label className="text-minecraft-white font-bold mb-2 block">
              5. Опишите насколько вы хороши
            </label>
            <textarea
              value={staffApplication.skills}
              onChange={(e) => setStaffApplication({...staffApplication, skills: e.target.value})}
              className="w-full p-3 bg-minecraft-black/50 border-2 border-minecraft-green text-minecraft-white rounded h-24"
              placeholder="Ваши навыки, умения и достижения"
            />
          </div>

          <div>
            <label className="text-minecraft-white font-bold mb-2 block">
              6. Немного о себе
            </label>
            <textarea
              value={staffApplication.about}
              onChange={(e) => setStaffApplication({...staffApplication, about: e.target.value})}
              className="w-full p-3 bg-minecraft-black/50 border-2 border-minecraft-green text-minecraft-white rounded h-32"
              placeholder="Расскажите о себе, ваших увлечениях и мотивации"
            />
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={() => {
                if (!staffApplication.age || parseInt(staffApplication.age) < 11) {
                  alert('Возраст должен быть не менее 11 лет');
                  return;
                }
                if (!staffApplication.fullName || !staffApplication.position || !staffApplication.workExperience || !staffApplication.skills || !staffApplication.about) {
                  alert('Пожалуйста, заполните все поля');
                  return;
                }
                alert('Заявка отправлена! Ожидайте рассмотрения администрацией.');
                setShowStaffForm(false);
                setStaffApplication({
                  age: '',
                  fullName: '',
                  position: '',
                  workExperience: '',
                  skills: '',
                  about: ''
                });
              }}
              className="flex-1 bg-minecraft-green hover:bg-minecraft-green/80"
            >
              ✅ Отправить заявку
            </Button>
            <Button 
              onClick={() => setShowStaffForm(false)}
              variant="outline"
              className="flex-1 border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
            >
              ❌ Отмена
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

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
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-minecraft-white mb-8 text-center" style={{ fontFamily: 'Press Start 2P' }}>
              ⚠️ СИСТЕМА НАКАЗАНИЙ
            </h2>
            
            {/* Punishment Categories */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-minecraft-black/50 p-6 rounded-lg border-2 border-yellow-400/30">
                <div className="text-yellow-400 text-3xl mb-3 text-center">⚠️</div>
                <h3 className="text-minecraft-white font-bold mb-3 text-center">Предупреждение</h3>
                <ul className="text-minecraft-white/80 text-sm space-y-1">
                  <li>• Флуд в чате</li>
                  <li>• Капс в сообщениях</li>
                  <li>• Мелкие споры</li>
                  <li>• Первое нарушение</li>
                </ul>
              </div>
              
              <div className="bg-minecraft-black/50 p-6 rounded-lg border-2 border-orange-400/30">
                <div className="text-orange-400 text-3xl mb-3 text-center">🔇</div>
                <h3 className="text-minecraft-white font-bold mb-3 text-center">Мут</h3>
                <ul className="text-minecraft-white/80 text-sm space-y-1">
                  <li>• Мат в чате</li>
                  <li>• Реклама</li>
                  <li>• Спам</li>
                  <li>• Провокации</li>
                </ul>
                <div className="mt-3 text-orange-300 font-bold text-xs">30 мин - 24 часа</div>
              </div>
              
              <div className="bg-minecraft-black/50 p-6 rounded-lg border-2 border-red-400/30">
                <div className="text-red-400 text-3xl mb-3 text-center">⏰</div>
                <h3 className="text-minecraft-white font-bold mb-3 text-center">Временный бан</h3>
                <ul className="text-minecraft-white/80 text-sm space-y-1">
                  <li>• Гриферство</li>
                  <li>• Кража из приватов</li>
                  <li>• Обман в торговле</li>
                  <li>• Читы (14 дней)</li>
                </ul>
                <div className="mt-3 text-red-300 font-bold text-xs">1 день - 1 месяц</div>
              </div>
              
              <div className="bg-minecraft-black/50 p-6 rounded-lg border-2 border-purple-400/30">
                <div className="text-purple-400 text-3xl mb-3 text-center">🚫</div>
                <h3 className="text-minecraft-white font-bold mb-3 text-center">Перманентный бан</h3>
                <ul className="text-minecraft-white/80 text-sm space-y-1">
                  <li>• Читы (повторно)</li>
                  <li>• Дюпы и эксплойты</li>
                  <li>• Оскорбления админов</li>
                  <li>• Массовый грифинг</li>
                </ul>
                <div className="mt-3 text-purple-300 font-bold text-xs">Навсегда</div>
              </div>
            </div>

            {/* Specific Punishments Table */}
            <div className="bg-minecraft-black/30 rounded-lg p-6 border-2 border-minecraft-green/50">
              <h3 className="text-minecraft-white font-bold mb-6 text-xl text-center" style={{ fontFamily: 'Press Start 2P' }}>
                📋 ТАБЛИЦА НАКАЗАНИЙ
              </h3>
              
              <div className="grid gap-4">
                <div className="bg-minecraft-brown/30 p-4 rounded border-l-4 border-yellow-400">
                  <div className="flex justify-between items-center">
                    <span className="text-minecraft-white font-bold">Нецензурная лексика в чате</span>
                    <Badge className="bg-orange-500/80">Мут 30 мин</Badge>
                  </div>
                </div>
                
                <div className="bg-minecraft-brown/30 p-4 rounded border-l-4 border-orange-400">
                  <div className="flex justify-between items-center">
                    <span className="text-minecraft-white font-bold">Использование читов (X-Ray, Fly)</span>
                    <Badge className="bg-red-500/80">Бан 7 дней</Badge>
                  </div>
                </div>
                
                <div className="bg-minecraft-brown/30 p-4 rounded border-l-4 border-red-400">
                  <div className="flex justify-between items-center">
                    <span className="text-minecraft-white font-bold">Гриферство чужих построек</span>
                    <Badge className="bg-red-600/80">Бан 3 дня</Badge>
                  </div>
                </div>
                
                <div className="bg-minecraft-brown/30 p-4 rounded border-l-4 border-purple-400">
                  <div className="flex justify-between items-center">
                    <span className="text-minecraft-white font-bold">Дюп предметов</span>
                    <Badge className="bg-purple-600/80">Перма бан</Badge>
                  </div>
                </div>
                
                <div className="bg-minecraft-brown/30 p-4 rounded border-l-4 border-yellow-400">
                  <div className="flex justify-between items-center">
                    <span className="text-minecraft-white font-bold">Реклама других серверов</span>
                    <Badge className="bg-orange-500/80">Мут 6 часов</Badge>
                  </div>
                </div>
                
                <div className="bg-minecraft-brown/30 p-4 rounded border-l-4 border-red-400">
                  <div className="flex justify-between items-center">
                    <span className="text-minecraft-white font-bold">Обман в торговле</span>
                    <Badge className="bg-red-500/80">Бан 1 день</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Appeal Process */}
            <div className="mt-8 bg-minecraft-green/10 p-6 rounded-lg border-2 border-minecraft-green/30">
              <h3 className="text-minecraft-white font-bold mb-4 text-lg text-center">
                📞 ОБЖАЛОВАНИЕ НАКАЗАНИЙ
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-minecraft-green font-bold mb-2">Как подать жалобу:</h4>
                  <ul className="text-minecraft-white/80 text-sm space-y-1">
                    <li>1. Перейти в Discord сервера</li>
                    <li>2. Создать тикет в #жалобы</li>
                    <li>3. Приложить скриншоты/доказательства</li>
                    <li>4. Дождаться рассмотрения (до 24 часов)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-minecraft-green font-bold mb-2">Важные условия:</h4>
                  <ul className="text-minecraft-white/80 text-sm space-y-1">
                    <li>• Обжалование только в течение 7 дней</li>
                    <li>• Ложные жалобы = дополнительное наказание</li>
                    <li>• Перма баны за читы НЕ обжалуются</li>
                    <li>• Решение старшей администрации окончательно</li>
                  </ul>
                </div>
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
      {currentPage === 'forum' && renderForumPage()}
      {currentPage === 'team' && <div className="py-20 text-center text-minecraft-white">Страница команды в разработке</div>}

      {/* Staff Application Form Modal */}
      {showStaffForm && renderStaffApplicationForm()}

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