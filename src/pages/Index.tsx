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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openTabs, setOpenTabs] = useState([
    { id: 1, title: 'Добро пожаловать', url: 'apple.com', favicon: '🍎' },
    { id: 2, title: 'GitHub', url: 'github.com', favicon: '💻' },
    { id: 3, title: 'YouTube', url: 'youtube.com', favicon: '🎥' },
    { id: 4, title: 'Gmail', url: 'gmail.com', favicon: '📧' },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);

  const addNewTab = () => {
    const newTab = {
      id: Date.now(),
      title: 'Новая вкладка',
      url: '',
      favicon: '🌐'
    };
    setOpenTabs([...openTabs, newTab]);
    setActiveTabId(newTab.id);
  };

  const closeTab = (tabId: number) => {
    const newTabs = openTabs.filter(tab => tab.id !== tabId);
    setOpenTabs(newTabs);
    if (activeTabId === tabId && newTabs.length > 0) {
      setActiveTabId(newTabs[newTabs.length - 1].id);
    }
  };

  const activeTab = openTabs.find(tab => tab.id === activeTabId);

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
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50/30'
    }`}>
      <div className={`backdrop-blur-md border-b sticky top-0 z-50 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gray-800/90 border-gray-700/50'
          : 'bg-white/80 border-gray-200/50'
      }`}>
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
                  <button className={`p-1.5 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                  }`}>
                    <Icon name="Menu" size={18} />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className={`w-80 p-0 ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
                }`}>
                  <Tabs defaultValue="tabs" className="w-full h-full">
                    <TabsList className={`w-full justify-start rounded-none border-b p-0 h-auto bg-transparent transition-colors ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <TabsTrigger 
                        value="tabs" 
                        className={`rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3 transition-colors ${
                          isDarkMode ? 'text-gray-300 data-[state=active]:text-blue-400' : 'text-gray-700'
                        }`}
                      >
                        Вкладки
                      </TabsTrigger>
                      <TabsTrigger 
                        value="bookmarks"
                        className={`rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3 transition-colors ${
                          isDarkMode ? 'text-gray-300 data-[state=active]:text-blue-400' : 'text-gray-700'
                        }`}
                      >
                        Закладки
                      </TabsTrigger>
                      <TabsTrigger 
                        value="reading"
                        className={`rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3 transition-colors ${
                          isDarkMode ? 'text-gray-300 data-[state=active]:text-blue-400' : 'text-gray-700'
                        }`}
                      >
                        Чтение
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="tabs" className="p-4 m-0">
                      <ScrollArea className="h-[calc(100vh-120px)]">
                        <div className="space-y-2">
                          {openTabs.map((tab) => (
                            <div
                              key={tab.id}
                              onClick={() => setActiveTabId(tab.id)}
                              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors group ${
                                isDarkMode 
                                  ? `hover:bg-gray-700 ${ activeTabId === tab.id ? 'bg-gray-700 ring-1 ring-blue-500' : ''}` 
                                  : `hover:bg-gray-100 ${activeTabId === tab.id ? 'bg-blue-50 ring-1 ring-blue-200' : ''}`
                              }`}
                            >
                              <span className="text-2xl">{tab.favicon}</span>
                              <div className="flex-1 min-w-0">
                                <p className={`font-medium text-sm truncate transition-colors ${
                                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                                }`}>{tab.title}</p>
                                <p className={`text-xs truncate transition-colors ${
                                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>{tab.url || 'Новая вкладка'}</p>
                              </div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  closeTab(tab.id);
                                }}
                                className={`opacity-0 group-hover:opacity-100 transition-opacity rounded p-1 ${
                                  isDarkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                                }`}
                              >
                                <Icon name="X" size={14} />
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={addNewTab}
                            className={`w-full p-3 rounded-lg border-2 border-dashed transition-all flex items-center justify-center gap-2 ${
                              isDarkMode 
                                ? 'border-gray-600 hover:border-blue-500 hover:bg-blue-900/30 text-gray-400 hover:text-blue-400'
                                : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50/50 text-gray-600 hover:text-blue-600'
                            }`}
                          >
                            <Icon name="Plus" size={18} />
                            <span className="text-sm font-medium">Новая вкладка</span>
                          </button>
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="bookmarks" className="p-4 m-0">
                      <ScrollArea className="h-[calc(100vh-120px)]">
                        <div className="space-y-2">
                          {bookmarks.map((bookmark, index) => (
                            <div
                              key={index}
                              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                              }`}
                            >
                              <span className="text-2xl">{bookmark.icon}</span>
                              <div className="flex-1 min-w-0">
                                <p className={`font-medium text-sm truncate transition-colors ${
                                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                                }`}>{bookmark.name}</p>
                                <p className={`text-xs truncate transition-colors ${
                                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>{bookmark.url}</p>
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
                              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                              }`}
                            >
                              <p className={`font-medium text-sm mb-1 transition-colors ${
                                isDarkMode ? 'text-gray-200' : 'text-gray-800'
                              }`}>{item.title}</p>
                              <p className={`text-xs transition-colors ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}>{item.url}</p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                </SheetContent>
              </Sheet>

              <button className={`p-1.5 rounded-lg transition-colors ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}>
                <Icon name="ChevronLeft" size={18} />
              </button>
              <button className={`p-1.5 rounded-lg transition-colors ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}>
                <Icon name="ChevronRight" size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <div className={`absolute inset-0 backdrop-blur-sm rounded-lg ${
                isDarkMode ? 'bg-gray-700/60' : 'bg-gray-100/80'
              }`} />
              <div className="relative flex items-center gap-2 px-4 py-2">
                <Icon name="Lock" size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                <Input
                  type="text"
                  placeholder={activeTab?.url || 'Поиск или введите адрес сайта'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`flex-1 border-0 bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0 ${
                    isDarkMode ? 'text-gray-200 placeholder:text-gray-400' : 'text-gray-800 placeholder:text-gray-500'
                  }`}
                />
                <Icon name="RotateCcw" size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
            }`}>
              <Icon name="Share2" size={18} />
            </button>
            <button className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
            }`}>
              <Icon name="BookOpen" size={18} />
            </button>
            <button className={`p-1.5 rounded-lg transition-colors relative ${
              isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
            }`}>
              <Icon name="Square" size={18} />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-medium px-1 rounded">
                {openTabs.length}
              </span>
            </button>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-1.5 rounded-lg transition-colors ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <Icon name={isDarkMode ? "Sun" : "Moon"} size={18} />
            </button>
            <button className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
            }`}>
              <Icon name="Settings" size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-8 space-y-8 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className={`text-4xl font-light mb-2 transition-colors ${
              isDarkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>Safari</h1>
            <p className={`transition-colors ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>Начните вводить адрес или искать в интернете</p>
          </div>

          <div>
            <h2 className={`text-lg font-medium mb-4 px-2 transition-colors ${
              isDarkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>Избранное</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {favoritesSites.map((site, index) => (
                <Card
                  key={index}
                  className={`group p-4 hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-105 border-0 ${
                    isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700/80' : 'bg-white/80'
                  }`}
                >
                  <div className={`w-12 h-12 ${site.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {site.icon}
                  </div>
                  <p className={`text-xs text-center font-medium truncate transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{site.name}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className={`p-6 backdrop-blur-sm border-0 transition-colors ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Clock" size={20} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
                <h2 className={`text-lg font-medium transition-colors ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>Часто посещаемые</h2>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Google Drive', url: 'drive.google.com' },
                  { name: 'Gmail', url: 'gmail.com' },
                  { name: 'YouTube', url: 'youtube.com' },
                ].map((site, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                      isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <Icon name="Globe" size={18} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium text-sm truncate transition-colors ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>{site.name}</p>
                      <p className={`text-xs truncate transition-colors ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>{site.url}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className={`p-6 backdrop-blur-sm border-0 transition-colors ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" size={20} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
                <h2 className={`text-lg font-medium transition-colors ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>Рекомендации</h2>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Новости технологий', source: 'TechCrunch' },
                  { title: 'Обновления Safari', source: 'Apple' },
                  { title: 'Веб-разработка', source: 'MDN' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg transition-colors cursor-pointer ${
                      isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <p className={`font-medium text-sm mb-1 transition-colors ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>{item.title}</p>
                    <p className={`text-xs transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{item.source}</p>
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