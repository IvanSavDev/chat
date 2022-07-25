const ruLocal = {
  ru: {
    translation: {
      header: {
        title: 'Hexlet Chat',
        logOutBtn: 'Выйти',
      },
      notFoundPage: 'Страница не найдена',
      forms: {
        username: 'Ваш ник',
        password: 'Пароль',
        authFailed: 'Неверные имя пользователя или пароль',
        requiredName: 'Требуется имя',
        requiredPassword: 'Требуется пароль',
        authorization: {
          title: 'Авторизация',
          logInBtn: 'Войти',
          footerText: 'Нет аккаунта?',
          link: 'Регистрация',
        },
        registration: {
          username: 'Имя пользователя',
          title: 'Форма регистрации',
          notMatchPassword: 'Пароли должны совпадать',
          minPassword: 'Не менее 6 символов',
          minName: 'От 3 до 20 символов',
          maxName: 'От 3 до 20 символов',
          existUser: 'Такой пользователь уже существует',
          confirmPassword: 'Подтвердите пароль',
          button: 'Зарегистрироваться',
        },
      },
      chat: {
        channels: 'Каналы',
        removeChannel: 'Удалить',
        renameChannel: 'Переименовать',
        messages: 'Сообщения',
        placeholderMessages: 'Напишите ваше сообщение здесь',
        send: 'Отправить',
      },
      modal: {
        renameChannel: 'Переименовать канал',
        deleteChannel: 'Удалить канал',
        createChannel: 'Создать канал',
        nameChannel: 'Имя канала',
        deleteBody: 'Вы уверены, что хотите удалить канал?',
        newName: 'Новое имя',
        close: 'Закрыть',
        rename: 'Переименовать',
        delete: 'Удалить',
        create: 'Создать',
        channelExist: 'Такой канал уже существует',
      },
      loading: 'Загрузка...',
      notify: {
        createChannel: 'Канал создан',
        deleteChannel: 'Канал удален',
        renameChannel: 'Канал переименован',
        error: 'Произошла ошибка, пожалуйста, повторите попытку',
      },
      networkError: 'Ошибка соединения',
      unknownError: 'Неизвестная ошибка',
    },
  },
};

export default ruLocal;
