# О ПРОЕКТЕ <br>
Данный проект используется для тестррования разный фитч на реакте и по соместительству моим личным блогом.<br>
Проект использует мою собственную сборку WEBPACK с https://github.com/Zigtelus/webpack .<br>
В данном проекте TypeScript совместим с классовыми компонентами.

# ТЕХНОЛОГИИ <br>
- React 16 <br>
- React-dom 16 <br>
- React-redux 5 <br>
- react-router-dom 6 <br>
- TypeScript <br>
- Less <br>

- dompurify - данная технология необходима для чтения разметки из текста <br> 

# ЗАПУСК ПРОЕКТА через Docker <br>
1. создание образа:
- docker build -t test-webpack . <br>

2. запуск на 8080 порту: <br>
- docker run -p 8080:{{тут указывается номер порта из wbpack.config}} {{id_container}} <br>
- docker run -p 8080:8091 test-webpack - пример

открываете ссылку:
http://localhost:8080/