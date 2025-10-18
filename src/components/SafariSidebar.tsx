import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Tab {
  id: number;
  title: string;
  url: string;
  favicon: string;
}

interface Bookmark {
  name: string;
  url: string;
  icon: string;
}

interface ReadingItem {
  title: string;
  url: string;
}

interface HistoryItem {
  id: number;
  title: string;
  url: string;
  time: string;
  favicon: string;
}

interface SafariSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  isDarkMode: boolean;
  isPrivateMode: boolean;
  openTabs: Tab[];
  activeTabId: number;
  setActiveTabId: (id: number) => void;
  closeTab: (id: number) => void;
  addNewTab: () => void;
  bookmarks: Bookmark[];
  readingList: ReadingItem[];
  filteredHistory: HistoryItem[];
  historySearch: string;
  setHistorySearch: (value: string) => void;
  clearHistory: () => void;
}

export const SafariSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isDarkMode,
  isPrivateMode,
  openTabs,
  activeTabId,
  setActiveTabId,
  closeTab,
  addNewTab,
  bookmarks,
  readingList,
  filteredHistory,
  historySearch,
  setHistorySearch,
  clearHistory,
}: SafariSidebarProps) => {
  return (
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
            <TabsTrigger 
              value="history"
              className={`rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3 transition-colors ${
                isDarkMode ? 'text-gray-300 data-[state=active]:text-blue-400' : 'text-gray-700'
              }`}
            >
              История
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

          <TabsContent value="history" className="p-4 m-0">
            <div className="mb-4">
              <div className="relative">
                <Icon name="Search" size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  type="text"
                  placeholder="Поиск в истории"
                  value={historySearch}
                  onChange={(e) => setHistorySearch(e.target.value)}
                  className={`pl-10 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-400' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                />
              </div>
            </div>
            <ScrollArea className="h-[calc(100vh-200px)]">
              {isPrivateMode ? (
                <div className="text-center py-8">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <Icon name="EyeOff" size={28} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                  </div>
                  <p className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Приватный режим включён
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    История не сохраняется
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredHistory.length > 0 ? (
                    <>
                      {filteredHistory.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors group ${
                            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-xl">{item.favicon}</span>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium text-sm truncate transition-colors ${
                              isDarkMode ? 'text-gray-200' : 'text-gray-800'
                            }`}>{item.title}</p>
                            <p className={`text-xs truncate transition-colors ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>{item.url}</p>
                            <p className={`text-xs mt-0.5 transition-colors ${
                              isDarkMode ? 'text-gray-500' : 'text-gray-400'
                            }`}>{item.time}</p>
                          </div>
                          <button className={`opacity-0 group-hover:opacity-100 transition-opacity rounded p-1 ${
                            isDarkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                          }`}>
                            <Icon name="X" size={14} />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={clearHistory}
                        className={`w-full p-3 rounded-lg transition-colors text-sm font-medium ${
                          isDarkMode 
                            ? 'text-red-400 hover:bg-red-900/20' 
                            : 'text-red-600 hover:bg-red-50'
                        }`}
                      >
                        Очистить историю
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                        Ничего не найдено
                      </p>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
