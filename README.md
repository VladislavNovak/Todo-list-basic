Завершенный проект. 
Реализует базовый функционал списка дел (Todo). 
Использован лишь React. Без Redux, без маршрутизации. Проверка валидации отключена.

![Screenshot](Screenshot_4.png)

- [Логика](#Логика)
- [Базовые настройки](#Базовые-настройки)
- [Полезности и шаблоны](#Полезности-и-шаблоны)

# Логика

Компонент ***App*** хранит массив всех дел: todos = useState([]). И содержит функции для операции с этим массивом:

1. handleAddTask - добавляет новую задачу
2. handleRemoveTask - удаляет выбранную задачу
3. handleToggleTask - изменяет выбранную задачу (перечеркивает текст)

В App включены два компонента:

1. ***TodoForm*** - поле ввода данных
2. ***TodoItem*** - визуализация конкретного дела (todo)

***TodoForm*** локально хранит введенную пользователем информацию: userInputText = useState(``). Содержит функции для работы с полем ввода:

1. handleChange, handleKeyDown - сохраняют данные в userInputText
2. handleSubmit - сохраняет информацию из userInputText в коллбэк, который передается в App.handleAddTask()

***TodoItem*** на основе полученной из пропсов информации строит html структуру. Он не содержит никакой логики из исключением двух колбэков:

1. removeTask - передаёт в App.handleRemoveTask свой id для удаления
2. toggleTask - передаёт в App.handleToggleTask свой id для изменения

# Базовые настройки

Если ещё не установлен yarn:

    npm i -g yarn

Создаем проект:

    npx create-react-app notes-firestore

Переходим в сам проект через cd notes-firestore и настраиваем линтер (сам eslint уже установлен вместе с create-react-app):

    yarn add eslint-plugin-babel eslint-plugin-react --dev

Создаем обслуживающие функционал:

    touch .editorconfig .eslintrc.json .gitattributes

Наполняем editorconfig:

    root = true

    [*]
    charset = utf-8
    end_of_line = lf
    indent_size = 2
    indent_style = space
    insert_final_newline = true
    trim_trailing_whitespace = true

    [*.md]
    trim_trailing_whitespace = false

Наполняем eslintrc:

    {
      "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
      },
      "extends": ["eslint:recommended",
        "plugin:react/recommended"],
        "parserOptions": {
          "ecmaFeatures": {
            "jsx": true
      },
          "ecmaVersion": 2018,
          "sourceType": "module"
      },
      "plugins": [
          "react",
          "babel"
      ],
      "rules": {
          "no-unused-vars": ["error", { "caughtErrorsIgnorePattern": "^ignore" }],
          "react/jsx-uses-react": 1,
          "react/jsx-uses-vars": "error",

          "linebreak-style": [
          "error",
          "unix"
      ],
          "babel/new-cap": 1,
          "babel/camelcase": 1,
          "babel/no-invalid-this": 1,
          "babel/object-curly-spacing": 1,
            "babel/semi": 1,
          "babel/no-unused-expressions": 1,
          "babel/valid-typeof": 1
      }
    }

Наполняем gitattributes:

    * text=auto
    *.doc     diff=astextplain
    *.DOC     diff=astextplain
    *.docx    diff=astextplain
    *.DOCX    diff=astextplain
    *.dot     diff=astextplain
    *.DOT     diff=astextplain
    *.pdf     diff=astextplain
    *.PDF     diff=astextplain
    *.rtf     diff=astextplain
    *.RTF     diff=astextplain
    *.md text
    *.tex text
    *.adoc text
    *.textile text
    *.mustache text
    *.csv text
    *.tab text
    *.tsv text
    *.sql text
    *.png binary
    *.jpg binary
    *.jpeg binary
    *.gif binary
    *.tif binary
    *.tiff binary
    *.ico binary
    *.svg binary
    #*.svg text
    *.eps binary

    .gitattributes export-ignore
    .gitignore export-ignore

Удаляем из предустановленного проекта App.test.js logo.svg reportWebVitalis.js. Удаляем сопутствующие импорты.

Настраиваем порт в package.json:

    "start": "set port=3013 && react-scripts start",

Запускаем проект:

    yarn run start

Если проект успешно скомпилировался, создаем репозиторий на gitHub и копируем его на компьютер, введя после нижеприведенной команды адрес, который скопировали из удаленного репозитория:

    git remote add origin

Сохраняем все изменения в удаленный репозиторий на github, привязываясь к нему:

    git add -A
    git commit -m
    git push -u origin master

Все последующие изменения можно будет вносить командой:

    git add -A
    git commit -m
    git push

# Полезности и шаблоны

Находит в массиве наибольший индекс:

src/auxilliary

    export function nextTodoId (todos) {
      const maxId = todos.reduce((total, amount) => Math.max(total, amount.id), -1);
      return maxId + 1;
    }
