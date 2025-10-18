import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const favoritesSites = [
    { name: 'YouTube', url: 'youtube.com', icon: '🎥', color: 'bg-red-50' },
    { name: 'GitHub', url: 'github.com', icon: '💻', color: 'bg-gray-50' },
    { name: 'Twitter', url: 'twitter.com', icon: '🐦', color: 'bg-blue-50' },
    { name: 'LinkedIn', url: 'linkedin.com', icon: '💼', color: 'bg-blue-50' },
    { name: 'Netflix', url: 'netflix.com', icon: '🎬', color: 'bg-red-50' },
    { name: 'Amazon', url: 'amazon.com', icon: '🛒', color: 'bg-orange-50' },
    { name: 'Spotify', url: 'spotify.com', icon: '🎵', color: 'bg-green-50' },
    { name: 'Reddit', url: 'reddit.com', icon: '📱', color: 'bg-orange-50' },
  ];

  const frequentlySites = [
    { name: 'Google Drive', url: 'drive.google.com', visits: 142 },
    { name: 'Gmail', url: 'gmail.com', visits: 128 },
    { name: 'Stack Overflow', url: 'stackoverflow.com', visits: 97 },
    { name: 'Medium', url: 'medium.com', visits: 73 },
  ];

  const tabGroups = [
    { name: 'Работа', count: 12, color: 'bg-blue-500' },
    { name: 'Личное', count: 7, color: 'bg-purple-500' },
    { name: 'Покупки', count: 4, color: 'bg-green-500' },
  ];

  const news = [
    { title: 'Новые функции Safari 2025', source: 'Apple News', time: '2ч назад' },
    { title: 'Обновление macOS: что нового', source: 'MacWorld', time: '5ч назад' },
    { title: 'Топ расширений для браузера', source: 'TechCrunch', time: '1д назад' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl" />
          <div className="relative flex items-center gap-3 p-4">
            <Icon name="Search" size={20} className="text-gray-500 ml-2" />
            <Input
              type="text"
              placeholder="Поиск или введите адрес сайта"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
            />
            <button className="p-2 hover:bg-gray-100/50 rounded-lg transition-all duration-200">
              <Icon name="Mic" size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
              🧭
            </div>
            <h1 className="text-3xl font-light text-gray-800">Safari</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white/60 rounded-lg transition-all duration-200">
              <Icon name="Settings" size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-white/60 rounded-lg transition-all duration-200">
              <Icon name="User" size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="favorites" className="w-full">
              <TabsList className="bg-white/60 backdrop-blur-sm p-1">
                <TabsTrigger value="favorites" className="data-[state=active]:bg-white">
                  Избранное
                </TabsTrigger>
                <TabsTrigger value="frequently" className="data-[state=active]:bg-white">
                  Часто посещаемые
                </TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-white">
                  История
                </TabsTrigger>
              </TabsList>

              <TabsContent value="favorites" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {favoritesSites.map((site, index) => (
                    <Card
                      key={index}
                      className="group p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm hover:scale-105 border-0"
                    >
                      <div className={`w-16 h-16 ${site.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        {site.icon}
                      </div>
                      <h3 className="font-medium text-center text-gray-800 text-sm">{site.name}</h3>
                      <p className="text-xs text-gray-500 text-center mt-1">{site.url}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="frequently" className="mt-6">
                <div className="space-y-3">
                  {frequentlySites.map((site, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm flex items-center justify-between group border-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <Icon name="Globe" size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{site.name}</h3>
                          <p className="text-sm text-gray-500">{site.url}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{site.visits} посещений</span>
                        <Icon name="ChevronRight" size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <Card className="p-8 text-center bg-white/80 backdrop-blur-sm border-0">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">История посещений</h3>
                  <p className="text-gray-500 text-sm">Здесь будет отображаться ваша история просмотров</p>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Layers" size={20} className="text-gray-700" />
                <h2 className="text-lg font-medium text-gray-800">Группы вкладок</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tabGroups.map((group, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 cursor-pointer group hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${group.color}`} />
                      <span className="font-medium text-gray-800">{group.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{group.count} вкладок</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Cloud" size={24} />
                <Icon name="MapPin" size={16} />
              </div>
              <div className="text-5xl font-light mb-2">22°</div>
              <div className="text-blue-100 mb-4">Москва</div>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Droplets" size={16} />
                  <span>45%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Wind" size={16} />
                  <span>12 км/ч</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Newspaper" size={20} className="text-gray-700" />
                <h2 className="text-lg font-medium text-gray-800">Новости</h2>
              </div>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b border-gray-100 last:border-0 last:pb-0 cursor-pointer group"
                  >
                    <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{item.source}</span>
                      <span>•</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Sparkles" size={20} className="text-gray-700" />
                <h2 className="text-lg font-medium text-gray-800">Предложения Siri</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                    <Icon name="BookOpen" size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Продолжить чтение</p>
                    <p className="text-xs text-gray-500">medium.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                    <Icon name="ShoppingCart" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Корзина Amazon</p>
                    <p className="text-xs text-gray-500">3 товара</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;