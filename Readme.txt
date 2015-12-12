Описание API:
Странная биржа: Имеется абстрактное бесконечное количество товара и покупательской способности, пользователи могут покупать и продавать товар по заданной цене, цена вычисляется и зависит от количество покупок и продаж.

Выбран REST API, т.к. наша структура достаточно простая и более сложные структуры использовать не стоит.

Структура ресурсов:
Корнвой узел:
  Узел товары(/prodoct) - различные товары:
    Узел товар 1:
      (/product/productID)
      Поле наименование товара(ID):
      Поле цена товара:
  Узел запрос(/request) - поле в котором хранится заброс а покупку или продажу пока не выполнится сервером:
    Поле запрос: (Наименование(ID),Цена,Количество, IDPerson)
  Узел архив запросов(/users) - хранятся выполненые запросы по всем пользователям:
    /user/(userID)
      Наименование пользователя:
      Архив запросов:
Операции:

Get:
  URL: /product - возвращение всех цен
  REQUEST
    Method: GET
    Parameters: 
  RESPONSE
    Content-Type: application/json
    Code: 200 HTTP_OK
    Body: { "products": [ { "productID": "ID",  "productCost": Cost }, ... ]}
    
  URL: /user - возвращение всех запросов сделанных пользователем и обработанных сервером
  REQUEST
    Method: GET
    Parameters: userID=(ID)
  RESPONSE
    Content-Type: application/json
    Code: 200 HTTP_OK
    Body: { "products": [ { "productID": "ID",  "productCost": Cost }, ... ]}
    
  URL: /product - возвращение всех цен
  REQUEST
    Method: GET
    Parameters: productID=(ID)
  RESPONSE
    Content-Type: application/json
    Code: 200 HTTP_OK
    Body: { "products": [ { "productID": "ID",  "productCost": Cost }}
Post:
  URL: /request
  REQUEST
    Method: POST
    Parameters: productID=(ID)
    Body: { "products": [ { "productID": "ID",  "productCost": Cost,"Count": count }}
  RESPONSE
    Code:
      Success - 200 HTTP_OK
      Fail - 404 HTTP_NOT_FOUND
    

