import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface SafariToolbarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isPrivateMode: boolean;
  setIsPrivateMode: (value: boolean) => void;
  openTabsLength: number;
  activeTabUrl?: string;
}

export const SafariToolbar = ({
  searchQuery,
  setSearchQuery,
  isDarkMode,
  setIsDarkMode,
  isPrivateMode,
  setIsPrivateMode,
  openTabsLength,
  activeTabUrl,
}: SafariToolbarProps) => {
  return (
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
              {isPrivateMode ? (
                <Icon name="EyeOff" size={14} className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} />
              ) : (
                <Icon name="Lock" size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
              )}
              <Input
                type="text"
                placeholder={activeTabUrl || (isPrivateMode ? 'Приватный просмотр' : 'Поиск или введите адрес сайта')}
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
              {openTabsLength}
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
          <button 
            onClick={() => setIsPrivateMode(!isPrivateMode)}
            className={`p-1.5 rounded-lg transition-colors ${
              isPrivateMode 
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <Icon name="EyeOff" size={18} />
          </button>
          <button className={`p-1.5 rounded-lg transition-colors ${
            isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <Icon name="Settings" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
