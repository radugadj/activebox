 // Получаем ссылку на элемент
        let scrollingElement = document.querySelector('.header');
      
        // Функция, которая будет вызываться при прокрутке
        function handleScroll() {
          // Проверяем, насколько прокручена страница по вертикали
          let scrollPosition = window.scrollY;
      
          // Условие, при котором добавляем класс
          if (scrollPosition > 0) {
            scrollingElement.classList.add('scrolled');
          } else {
            scrollingElement.classList.remove('scrolled');
          }
        }
      
        // Добавляем прослушиватель события прокрутки
        window.addEventListener('scroll', handleScroll);

        // Получаем ссылки на элементы
        let menuButton = document.querySelector('.burger-menu');
        let menu = document.querySelector('.menu');

        // // Добавляем слушатели событий
        menuButton.addEventListener('click', toggleMenu);

        // // Функция для открытия/закрытия меню
        function toggleMenu() {
            menu.classList.toggle('open');
        }

        // // Добавляем слушатель события для каждого пункта меню
        let menuItems = document.querySelectorAll('.menu li');
        menuItems.forEach(function(item) {
            item.addEventListener('click', closeMenu);
        });

         // Функция для закрытия меню
        function closeMenu() {
            menu.classList.remove('open');
        }
