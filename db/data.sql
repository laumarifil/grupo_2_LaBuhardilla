-- SECCION CARGA DE DATOS

-- SE CARGAN DATOS DE COLORES (5 COLORES)
insert into COLOR (id, name) values (1, 'Transparente');
insert into COLOR (id, name) values (2, 'Celeste');
insert into COLOR (id, name) values (3, 'Azul');
insert into COLOR (id, name) values (4, 'Blanco');
insert into COLOR (id, name) values (5, 'Naranja');
insert into COLOR (id, name) values (6, 'Varios');
insert into COLOR (id, name) values (7, 'Marrón');
insert into COLOR (id, name) values (8, 'Verde');

-- SE CARGAN DATOS DE CATEGORIAS (3 CATEGORIAS)
insert into CATEGORY (id, name) values (1, 'Deco');
insert into CATEGORY (id, name) values (2, 'Bazar');
insert into CATEGORY (id, name) values (3, 'Muebles');
insert into CATEGORY (id, name) values (4, 'Iluminación');
insert into CATEGORY (id, name) values (5, 'Wall Art');

-- SE CARGAN DATOS DE PRODUCTOS (100 PRODUCTOS)
insert into PRODUCTS (id, name, price, id_category, id_color, image, description, stock) values (1, 'GUIRNALDAS LUCES DE HILO', 2400, 4, 2, 'imagen-1599856463321.jpg', 'Nuestras guirnaldas tienen 20 luces, cable blanco, interruptor y enchufe. Miden 2,70 metros hasta el interruptor y luego tienen 1,2 metros mas de cable. De bajo consumo. Son fijas no titilan y tienen luz cálida.', 1);
insert into PRODUCTS (id, name, price, id_category, id_color, image, description, stock) values (2, 'CUADRO AQUARELA DOLO', 3800, 5, 5, 'imagen-1599856508363.jpg', 'Modernas y vibrantes pinturas en acuarelas, impresas en lienzo y enmarcadas en varilla color madera. Tamaño interno: 40×60 cm Tamaño externo: 43×63 cm Varilla: Varilla: 4058-8696 Marrón, 1,5 cm', 1);
insert into PRODUCTS (id, name, price, id_category, id_color, image, description, stock) values (3, 'TAZAS RUFINA', 1480, 2, 6, 'imagen-1599856542713.jpg', 'Todas distintas! Combínalas como te guste!', 1);
insert into PRODUCTS (id, name, price, id_category, id_color, image, description, stock) values (4, 'RELOJ METAL AQUA', 2890, 5, 8, 'imagen-1599856585367.jpg', '40 cm de diametro', 1);
insert into PRODUCTS (id, name, price, id_category, id_color, image, description, stock) values (5, 'TABLA MADERA Y MÁRMOL', 3400, 2, 7, 'imagen-1599856634382.jpg', '¡Para degustar una rica picada!', 1);
insert into PRODUCTS (id, name, price, id_category, id_color, image, description, stock) values (6, 'JARRA DE NOCHE', 1980, 2, 1, 'imagen-1599856693473.jpg', 'Súper prácticas! Dos modelos ', 1);
insert into PRODUCTS (id, name, price, id_category, id_color, image, description, stock) values (7, 'HUERTAS DE MADERA', 3900, 3, 4, 'imagen-1599856721867.jpg', 'Ancho: 64 cm Profundidad: 35 cm Altura: 32 cm Colores: gris, blanco y turquesa', 1);
insert into PRODUCTS (id, name, price, id_category, id_color, image, description, stock) values (8, 'BANQUETAS DE MADERA CON TÉCNICA COLLAGE', 5300, 3, 8, 'imagen-1599856812363.jpg', '60 cm de alto Asiento de 40x40 cm', 1);

-- SE CARGAN DATOS DE ROLES (3 ROLES)
insert into ROLE (id, name) values (1, 'Admin');
insert into ROLE (id, name) values (2, 'User');

-- SE CARGAN DATOS DE PROVINCIAS


-- SE ARGAN DATOS DE LAS LOCALIDADES


-- SE CARGAN DATOS DE USUARIOS (8 USUARIOS)
insert into USERS (id, name, surname, email, password, image, id_role, phone, address, id_city) values (1, 'Doti', 'Northgraves', 'dnorthgraves0@theguardian.com', 'i31vcDMxi', 'imagen-1597970042237.jpg', 2, '8121218934', '3918 Hayes Trail', 17);
insert into USERS (id, name, surname, email, password, image, id_role, phone, address, id_city) values (2, 'Kathleen', 'Hesser', 'khesser1@marriott.com', 'tWuFc45PxTm', 'imagen-1597970042237.jpg', 2, '2389852677', '0818 Prairie Rose Plaza', 2031);
insert into USERS (id, name, surname, email, password, image, id_role, phone, address, id_city) values (3, 'Winni', 'Poat', 'wpoat2@slideshare.net', 'qtYCE6g', 'imagen-1597970042237.jpg', 2, '1528634464', '8 Rieder Pass', 340);
insert into USERS (id, name, surname, email, password, image, id_role, phone, address, id_city) values (4, 'Chandal', 'Hollier', 'chollier3@msu.edu', 'TrLVvS', 'imagen-1597970042237.jpg', 2, '7072343879', '1274 Basil Way', 762);
insert into USERS (id, name, surname, email, password, image, id_role, phone, address, id_city) values (5, 'Dniren', 'Boddis', 'dboddis4@aboutads.info', '0lyD9QvV3', 'imagen-1597970042237.jpg', 2, '2878627023', '6974 Green Trail', 1293);
insert into USERS (id, name, surname, email, password, image, id_role, phone, address, id_city) values (6, 'Gar', 'Bocke', 'gbocke5@alibaba.com', 'iI25AlG', 'imagen-1597970042237.jpg', 2, '3326605383', '50 Coleman Plaza', 1614);
insert into USERS (id, name, surname, email, password, image, id_role, phone, address, id_city) values (7, 'Ulberto', 'Dooly', 'udooly6@vk.com', 'CPL7rt27', 'imagen-1597970042237.jpg', 2, '8169917089', '074 Quincy Point', 720);
insert into USERS (id, name, surname, email, password, image, id_role, phone, address, id_city) values (8, 'Jarred', 'Pittle', 'jpittle7@google.it', 'uN6Ysht', 'imagen-1597970042237.jpg', 2, '6085519326', '68 Clyde Gallagher Center', 1655);


-- SE CARGAN DATOS DE LA FORMA DE PAGO
insert into PAYMENTS (id, name) values (1, "EFECTIVO");
insert into PAYMENTS (id, name) values (2, "TARJETA");

-- SE CARGAN DATOS DEL CARRITO (10 COMPRAS)
insert into CART (id, purchase_date, id_user, id_payment, total) values (1, '2020/05/03', 42, 1, 381.84);
insert into CART (id, purchase_date, id_user, id_payment, total) values (2, '2019/07/12', 13, 2, 214.85);
insert into CART (id, purchase_date, id_user, id_payment, total) values (3, '2020/09/28', 27, 1, 269.47);
insert into CART (id, purchase_date, id_user, id_payment, total) values (4, '2020/04/30', 49, 2, 5.54);
insert into CART (id, purchase_date, id_user, id_payment, total) values (5, '2019/10/25', 11, 1, 487.37);
insert into CART (id, purchase_date, id_user, id_payment, total) values (6, '2020/08/20', 26, 1, 322.92);
insert into CART (id, purchase_date, id_user, id_payment, total) values (7, '2020/04/08', 30, 1, 199.73);
insert into CART (id, purchase_date, id_user, id_payment, total) values (8, '2020/03/18', 34, 2, 357.58);
insert into CART (id, purchase_date, id_user, id_payment, total) values (9, '2019/09/19', 11, 1, 217.99);
insert into CART (id, purchase_date, id_user, id_payment, total) values (10, '2020/09/28', 31, 1, 96.15);

-- SE CARGAN DATOS DE LOS PRODUCTOS POR VENTA (20 PRODUCTOS EN COMPRAS)
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (1, 2, 12, 2);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (2, 6, 50, 3);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (3, 4, 81, 2);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (4, 10, 35, 1);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (5, 7, 61, 2);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (6, 7, 25, 4);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (7, 10, 97, 5);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (8, 8, 37, 2);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (9, 10, 99, 1);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (10, 9, 80, 4);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (11, 3, 97, 4);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (12, 3, 91, 2);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (13, 6, 23, 2);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (14, 10, 33, 5);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (15, 5, 40, 2);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (16, 3, 40, 5);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (17, 3, 27, 1);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (18, 10, 47, 4);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (19, 3, 80, 3);
insert into ITEMS_CART (id, id_cart, id_product, quantity) values (20, 9, 78, 1);


-- FIN SCRIPT SQL