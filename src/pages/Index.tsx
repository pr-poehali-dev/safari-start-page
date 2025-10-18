import { useState } from 'react';
import { SafariToolbar } from '@/components/SafariToolbar';
import { SafariSidebar } from '@/components/SafariSidebar';
import { SafariMainContent } from '@/components/SafariMainContent';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [historySearch, setHistorySearch] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPrivateMode, setIsPrivateMode] = useState(false);
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

  const browsingHistory = [
    { id: 1, title: 'Apple - официальный сайт', url: 'apple.com', time: 'Сегодня, 14:30', favicon: '🍎' },
    { id: 2, title: 'GitHub: Where the world builds software', url: 'github.com', time: 'Сегодня, 13:45', favicon: '💻' },
    { id: 3, title: 'YouTube - Смотреть видео', url: 'youtube.com', time: 'Сегодня, 12:20', favicon: '🎥' },
    { id: 4, title: 'Google', url: 'google.com', time: 'Сегодня, 11:05', favicon: '🔍' },
    { id: 5, title: 'Stack Overflow - Where Developers Learn', url: 'stackoverflow.com', time: 'Вчера, 18:30', favicon: '📚' },
    { id: 6, title: 'Medium - читать статьи', url: 'medium.com', time: 'Вчера, 16:15', favicon: '📝' },
    { id: 7, title: 'Twitter / X', url: 'twitter.com', time: 'Вчера, 10:45', favicon: '🐦' },
    { id: 8, title: 'Netflix - смотреть фильмы', url: 'netflix.com', time: '2 дня назад', favicon: '🎬' },
  ];

  const filteredHistory = browsingHistory.filter(item => 
    item.title.toLowerCase().includes(historySearch.toLowerCase()) ||
    item.url.toLowerCase().includes(historySearch.toLowerCase())
  );

  const clearHistory = () => {
    setHistorySearch('');
  };

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
      <div className="flex items-center gap-2 px-4 py-3">
        <SafariSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isDarkMode={isDarkMode}
          isPrivateMode={isPrivateMode}
          openTabs={openTabs}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
          closeTab={closeTab}
          addNewTab={addNewTab}
          bookmarks={bookmarks}
          readingList={readingList}
          filteredHistory={filteredHistory}
          historySearch={historySearch}
          setHistorySearch={setHistorySearch}
          clearHistory={clearHistory}
        />
      </div>

      <SafariToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isPrivateMode={isPrivateMode}
        setIsPrivateMode={setIsPrivateMode}
        openTabsLength={openTabs.length}
        activeTabUrl={activeTab?.url}
      />

      <SafariMainContent
        isDarkMode={isDarkMode}
        isPrivateMode={isPrivateMode}
        favoritesSites={favoritesSites}
      />
    </div>
  );
};

export default Index;
