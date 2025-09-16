// Mock users data
export const mockUsers = [
  {
    id: '1',
    email: 'admin@vitimo.com',
    username: 'admin',
    password: 'password123',
    avatar: '',
    isAdmin: true,
    walletBalance: 50000,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'user@vitimo.com',
    username: 'user',
    password: 'password123',
    avatar: '',
    isAdmin: false,
    walletBalance: 15000,
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    email: 'creator@vitimo.com',
    username: 'creator',
    password: 'password123',
    avatar: '',
    isAdmin: false,
    walletBalance: 25000,
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z'
  }
];

// Mock videos data
export const mockVideos = [
  {
    id: '1',
    title: 'آموزش برنامه‌نویسی React از صفر تا صد',
    description: 'یادگیری کامل React با پروژه‌های عملی و مثال‌های واقعی. در این دوره جامع با مفاهیم پایه‌ای React آشنا شده و تا سطح پیشرفته پیش خواهید رفت.',
    thumbnailUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: 3600,
    views: 15420,
    likes: 892,
    uploadedBy: '1',
    category: 'آموزش',
    tags: ['react', 'javascript', 'برنامه‌نویسی', 'frontend'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'راهنمای کامل کسب درآمد آنلاین',
    description: 'بهترین روش‌های کسب درآمد از اینترنت و راه‌اندازی کسب‌وکار آنلاین. تجربیات موفق و راهکارهای عملی برای شروع.',
    thumbnailUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: 2400,
    views: 8932,
    likes: 564,
    uploadedBy: '1',
    category: 'تجارت',
    tags: ['کسب‌درآمد', 'آنلاین', 'تجارت', 'استارتاپ'],
    createdAt: '2024-01-14T14:30:00Z',
    updatedAt: '2024-01-14T14:30:00Z'
  },
  {
    id: '3',
    title: 'تکنیک‌های حرفه‌ای عکاسی دیجیتال',
    description: 'نکات طلایی برای گرفتن عکس‌های بهتر، تنظیمات دوربین، ترکیب‌بندی و ویرایش عکس. از مبتدی تا حرفه‌ای.',
    thumbnailUrl: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: 1800,
    views: 12750,
    likes: 721,
    uploadedBy: '2',
    category: 'هنر',
    tags: ['عکاسی', 'هنر', 'آموزش', 'دیجیتال'],
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    title: 'آشپزی سنتی ایرانی - غذاهای محلی',
    description: 'یادگیری طبخ بهترین غذاهای سنتی و محلی ایران با دستور العمل‌های اصیل و نکات مهم آشپزی.',
    thumbnailUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: 2700,
    views: 6543,
    likes: 412,
    uploadedBy: '2',
    category: 'آشپزی',
    tags: ['آشپزی', 'غذا', 'سنتی', 'ایرانی'],
    createdAt: '2024-01-12T16:45:00Z',
    updatedAt: '2024-01-12T16:45:00Z'
  },
  {
    id: '5',
    title: 'ورزش و تناسب اندام در خانه',
    description: 'تمرینات کامل بدنسازی و فیتنس که می‌توانید در خانه و بدون تجهیزات انجام دهید. برنامه تمرینی ۳۰ روزه.',
    thumbnailUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: 1500,
    views: 9876,
    likes: 623,
    uploadedBy: '3',
    category: 'ورزش',
    tags: ['ورزش', 'فیتنس', 'خانگی', 'تناسب‌اندام'],
    createdAt: '2024-01-11T08:20:00Z',
    updatedAt: '2024-01-11T08:20:00Z'
  },
  {
    id: '6',
    title: 'مدیریت مالی شخصی و سرمایه‌گذاری',
    description: 'نحوه مدیریت پول، برنامه‌ریزی مالی، سرمایه‌گذاری در بورس و ارزهای دیجیتال برای آینده‌ای مطمئن.',
    thumbnailUrl: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: 3200,
    views: 11234,
    likes: 758,
    uploadedBy: '1',
    category: 'مالی',
    tags: ['مالی', 'سرمایه‌گذاری', 'پس‌انداز', 'بورس'],
    createdAt: '2024-01-10T12:00:00Z',
    updatedAt: '2024-01-10T12:00:00Z'
  },
  {
    id: '7',
    title: 'یادگیری زبان انگلیسی محاوره‌ای',
    description: 'تقویت مکالمه انگلیسی با روش‌های مدرن و تمرینات عملی. از سطح مبتدی تا پیشرفته.',
    thumbnailUrl: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: 2100,
    views: 7890,
    likes: 445,
    uploadedBy: '3',
    category: 'آموزش',
    tags: ['انگلیسی', 'زبان', 'مکالمه', 'آموزش'],
    createdAt: '2024-01-09T11:30:00Z',
    updatedAt: '2024-01-09T11:30:00Z'
  },
  {
    id: '8',
    title: 'گردشگری ایران - جاهای دیدنی شمال',
    description: 'معرفی بهترین مقاصد گردشگری شمال ایران، راهنمای سفر، هزینه‌ها و نکات مهم سفر.',
    thumbnailUrl: 'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: 1950,
    views: 5432,
    likes: 321,
    uploadedBy: '2',
    category: 'گردشگری',
    tags: ['گردشگری', 'ایران', 'شمال', 'سفر'],
    createdAt: '2024-01-08T15:20:00Z',
    updatedAt: '2024-01-08T15:20:00Z'
  }
];

// Mock live streams
export const mockLiveStreams = [
  {
    id: '1',
    title: 'پخش زنده: بحث درباره آینده فناوری و هوش مصنوعی',
    description: 'گفتگو در مورد آخرین پیشرفت‌های فناوری، هوش مصنوعی و تأثیر آن بر زندگی روزمره',
    thumbnailUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    streamUrl: 'https://stream.vitimo.com/live/tech-ai-discussion',
    isLive: true,
    viewers: 1234,
    streamer: 'علی احمدی',
    category: 'فناوری',
    startedAt: '2024-01-15T18:00:00Z'
  },
  {
    id: '2', 
    title: 'آموزش زنده: طراحی UI/UX مدرن',
    description: 'طراحی رابط کاربری و تجربه کاربری با ابزارهای مدرن و اصول طراحی',
    thumbnailUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    streamUrl: 'https://stream.vitimo.com/live/ui-ux-design',
    isLive: false,
    viewers: 0,
    streamer: 'مریم کریمی',
    category: 'طراحی',
    endedAt: '2024-01-14T20:30:00Z'
  }
];

// Mock podcasts
export const mockPodcasts = [
  {
    id: '1',
    title: 'پادکست موفقیت - اپیزود ۱: راز موفقیت کارآفرینان',
    description: 'بررسی عادات و روش‌های افراد موفق در دنیای کارآفرینی و کسب‌وکار',
    thumbnailUrl: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://sample-audio.com/podcast1.mp3',
    duration: 2400,
    listens: 5432,
    episode: 1,
    season: 1,
    host: 'مریم کریمی',
    category: 'انگیزشی',
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    title: 'تکنولوژی امروز - اپیزود ۱۵: هوش مصنوعی در ایران',
    description: 'بررسی وضعیت هوش مصنوعی در ایران، چالش‌ها و فرصت‌های موجود',
    thumbnailUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://sample-audio.com/podcast2.mp3',
    duration: 1800,
    listens: 3210,
    episode: 15,
    season: 2,
    host: 'علی احمدی',
    category: 'فناوری',
    createdAt: '2024-01-09T14:00:00Z'
  },
  {
    id: '3',
    title: 'داستان‌های ایرانی - قسمت ۳: افسانه‌های شمال',
    description: 'روایت افسانه‌ها و داستان‌های محلی از شمال ایران با صدای گوینده حرفه‌ای',
    thumbnailUrl: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://sample-audio.com/podcast3.mp3',
    duration: 1200,
    listens: 2156,
    episode: 3,
    season: 1,
    host: 'زهرا صادقی',
    category: 'فرهنگی',
    createdAt: '2024-01-08T16:00:00Z'
  }
];