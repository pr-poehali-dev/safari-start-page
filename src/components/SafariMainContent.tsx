import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FavoriteSite {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface SafariMainContentProps {
  isDarkMode: boolean;
  isPrivateMode: boolean;
  favoritesSites: FavoriteSite[];
}

export const SafariMainContent = ({
  isDarkMode,
  isPrivateMode,
  favoritesSites,
}: SafariMainContentProps) => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-6xl mx-auto p-8 space-y-8 animate-fade-in">
        <div className="text-center mb-12">
          {isPrivateMode && (
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
              isDarkMode ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-100 text-purple-700'
            }`}>
              <Icon name="EyeOff" size={16} />
              <span className="text-sm font-medium">Приватный просмотр</span>
            </div>
          )}
          <h1 className={`text-4xl font-light mb-2 transition-colors ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>Safari</h1>
          <p className={`transition-colors ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {isPrivateMode 
              ? 'Safari не сохранит историю и данные' 
              : 'Начните вводить адрес или искать в интернете'}
          </p>
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
  );
};
