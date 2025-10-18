import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tabs = [
    { id: 1, title: 'Добро пожаловать', url: 'apple.com', favicon: '🍎' },
    { id: 2, title: 'GitHub', url: 'github.com', favicon: '💻' },
    { id: 3, title: 'YouTube', url: 'youtube.com', favicon: '🎥' },
    { id: 4, title: 'Gmail', url: 'gmail.com', favicon: '📧' },
  ];

  const bookmarks = [
    { name: 'Apple', url: 'apple.com', icon: '🍎' },
    { name: 'GitHub', url: 'github.com', icon: '💻' },
    { name: 'Stack Overflow', url: 'stackoverflow.com', icon: '📚' },
    { name: 'Medium', url: 'medium.com', icon: '📝' },
  ];

  const readingList = [
    { title: 'Новые функции Safari 2025', url: 'apple.com/safari' },
    { title: 'Руководство по веб-разработке', url: 'developer.mozilla.org' },
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex flex-col">
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
              <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
              <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
            </div>

            <div className="flex items-center gap-2 ml-3">
              <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                <SheetTrigger asChild>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <Icon name="Menu" size={18} className="text-gray-600" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <Tabs defaultValue="tabs" className="w-full h-full">
                    <TabsList className="w-full justify-start rounded-none border-b p-0 h-auto bg-transparent">
                      <TabsTrigger 
                        value="tabs" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Вкладки
                      </TabsTrigger>
                      <TabsTrigger 
                        value="bookmarks"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Закладки
                      </TabsTrigger>
                      <TabsTrigger 
                        value="reading"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Чтение
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="tabs" className="p-4 m-0">
                      <ScrollArea className="h-[calc(100vh-120px)]">
                        <div className="space-y-2">
                          {tabs.map((tab) => (
                            <div
                              key={tab.id}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group"
                            >
                              <span className="text-2xl">{tab.favicon}</span>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm text-gray-800 truncate">{tab.title}</p>
                                <p className="text-xs text-gray-500 truncate">{tab.url}</p>
                              </div>
                              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Icon name="X" size={14} className="text-gray-400 hover:text-gray-600" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="bookmarks" className="p-4 m-0">
                      <ScrollArea className="h-[calc(100vh-120px)]">
                        <div className="space-y-2">
                          {bookmarks.map((bookmark, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                              <span className="text-2xl">{bookmark.icon}</span>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm text-gray-800 truncate">{bookmark.name}</p>
                                <p className="text-xs text-gray-500 truncate">{bookmark.url}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="reading" className="p-4 m-0">
                      <ScrollArea className="h-[calc(100vh-120px)]">
                        <div className="space-y-3">
                          {readingList.map((item, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                              <p className="font-medium text-sm text-gray-800 mb-1">{item.title}</p>
                              <p className="text-xs text-gray-500">{item.url}</p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                </SheetContent>
              </Sheet>

              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <Icon name="ChevronLeft" size={18} className="text-gray-600" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <Icon name="ChevronRight" size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-100/80 backdrop-blur-sm rounded-lg" />
              <div className="relative flex items-center gap-2 px-4 py-2">
                <Icon name="Lock" size={14} className="text-gray-500" />
                <Input
                  type="text"
                  placeholder="Поиск или введите адрес сайта"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 h-auto p-0"
                />
                <Icon name="RotateCcw" size={14} className="text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <Icon name="Share2" size={18} className="text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <Icon name="BookOpen" size={18} className="text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Icon name="Square" size={18} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-medium px-1 rounded">
                4
              </span>
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <Icon name="Settings" size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-8 space-y-8 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-gray-800 mb-2">Safari</h1>
            <p className="text-gray-500">Начните вводить адрес или искать в интернете</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4 px-2">Избранное</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {favoritesSites.map((site, index) => (
                <Card
                  key={index}
                  className="group p-4 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm hover:scale-105 border-0"
                >
                  <div className={`w-12 h-12 ${site.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {site.icon}
                  </div>
                  <p className="text-xs text-center text-gray-600 font-medium truncate">{site.name}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Clock" size={20} className="text-gray-700" />
                <h2 className="text-lg font-medium text-gray-800">Часто посещаемые</h2>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Google Drive', url: 'drive.google.com' },
                  { name: 'Gmail', url: 'gmail.com' },
                  { name: 'YouTube', url: 'youtube.com' },
                ].map((site, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <Icon name="Globe" size={18} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-800 truncate">{site.name}</p>
                      <p className="text-xs text-gray-500 truncate">{site.url}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" size={20} className="text-gray-700" />
                <h2 className="text-lg font-medium text-gray-800">Рекомендации</h2>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Новости технологий', source: 'TechCrunch' },
                  { title: 'Обновления Safari', source: 'Apple' },
                  { title: 'Веб-разработка', source: 'MDN' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <p className="font-medium text-sm text-gray-800 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.source}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
