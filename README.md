# rocketseat-nodejs
Curso de nodejs da Rocketseat

# Requisitos

docker

# Build

Para efetuar o build execute:

 ```docker-compose -f .\docker-compose.dev.yml up --build ```
 
# API REST

Publicada no Heroku

https://app-product-api.herokuapp.com/api/products

# Exemplos

```json
{"_type":"export","__export_format":4,"__export_date":"2020-04-14T23:00:23.095Z","__export_source":"insomnia.desktop.app:v7.1.1","resources":[{"_id":"req_85297f4054de46d9972d6218c38c8f7f","authentication":{},"body":{"mimeType":"application/json","text":"{\n\t\"title\":\"React Native\"\n}"},"created":1586365713285,"description":"","headers":[{"id":"pair_6cfbfdb82e6f4f688462f3fc1bceb992","name":"Content-Type","value":"application/json"}],"isPrivate":false,"metaSortKey":-1586365713285,"method":"PUT","modified":1586365986327,"name":"Update","parameters":[],"parentId":"wrk_9296a3c9083c42aaa75fc1a5da7e72d1","settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingFollowRedirects":"global","settingRebuildPath":true,"settingSendCookies":true,"settingStoreCookies":true,"url":"{{ baseUrl  }}/products/5e8df9360b08603d6cb0d6ac","_type":"request"},{"_id":"wrk_9296a3c9083c42aaa75fc1a5da7e72d1","created":1586364595462,"description":"","modified":1586364595462,"name":"Curso Node Js Rocketseat","parentId":null,"_type":"workspace"},{"_id":"req_99452b54a9c344809cc3e9e15d0fa7b4","authentication":{},"body":{"mimeType":"application/json","text":"{\n\t\"title\":\"React Native\"\n}"},"created":1586366061017,"description":"","headers":[{"id":"pair_6cfbfdb82e6f4f688462f3fc1bceb992","name":"Content-Type","value":"application/json"}],"isPrivate":false,"metaSortKey":-1586365588868,"method":"DELETE","modified":1586366064549,"name":"Delete","parameters":[],"parentId":"wrk_9296a3c9083c42aaa75fc1a5da7e72d1","settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingFollowRedirects":"global","settingRebuildPath":true,"settingSendCookies":true,"settingStoreCookies":true,"url":"{{ baseUrl  }}/products/5e8df9360b08603d6cb0d6ac","_type":"request"},{"_id":"req_529025825e9f49be9bcd4d2040eb65bb","authentication":{},"body":{},"created":1586365464451,"description":"","headers":[],"isPrivate":false,"metaSortKey":-1586365464451,"method":"GET","modified":1586365573849,"name":"Show","parameters":[],"parentId":"wrk_9296a3c9083c42aaa75fc1a5da7e72d1","settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingFollowRedirects":"global","settingRebuildPath":true,"settingSendCookies":true,"settingStoreCookies":true,"url":"{{ baseUrl  }}/products/5e8df9360b08603d6cb0d6ac","_type":"request"},{"_id":"req_138563991c2b481e8bf076d4e7f132cd","authentication":{},"body":{"mimeType":"application/json","text":"{    \n    \"title\": \"Public APIs\",\n    \"description\": \"A collective list of free APIs for use in software and web development.\",\n    \"url\": \"https://github.com/public-apis/public-apis\"\n  }"},"created":1586365109629,"description":"","headers":[{"id":"pair_1ace3a8b41d24b129c7c18fa92c28b25","name":"Content-Type","value":"application/json"}],"isPrivate":false,"metaSortKey":-1586365109629,"method":"POST","modified":1586475333216,"name":"Create","parameters":[],"parentId":"wrk_9296a3c9083c42aaa75fc1a5da7e72d1","settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingFollowRedirects":"global","settingRebuildPath":true,"settingSendCookies":true,"settingStoreCookies":true,"url":"{{ baseUrl  }}/products","_type":"request"},{"_id":"req_b836ec8f018740018e24aebf9105fcdf","authentication":{},"body":{"mimeType":"application/json","text":""},"created":1586364654622,"description":"","headers":[{"id":"pair_5fc105adf81642f0b1283034648fe0e7","name":"Content-Type","value":"application/json"}],"isPrivate":false,"metaSortKey":-1586364654622,"method":"GET","modified":1586451655935,"name":"Index","parameters":[],"parentId":"wrk_9296a3c9083c42aaa75fc1a5da7e72d1","settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingFollowRedirects":"global","settingRebuildPath":true,"settingSendCookies":true,"settingStoreCookies":true,"url":"{{ baseUrl  }}/products?page=1","_type":"request"},{"_id":"env_ecebd588a28b63904669810b29d498a8f3c6b1b4","color":null,"created":1586364595475,"data":{},"dataPropertyOrder":null,"isPrivate":false,"metaSortKey":1586364595475,"modified":1586364595475,"name":"Base Environment","parentId":"wrk_9296a3c9083c42aaa75fc1a5da7e72d1","_type":"environment"},{"_id":"jar_ecebd588a28b63904669810b29d498a8f3c6b1b4","cookies":[],"created":1586364595480,"modified":1586364595480,"name":"Default Jar","parentId":"wrk_9296a3c9083c42aaa75fc1a5da7e72d1","_type":"cookie_jar"},{"_id":"env_389aa14ec135432d9f306c0ce83daf44","color":null,"created":1586364619197,"data":{"baseUrl":"http://app-product-api.herokuapp.com/api"},"dataPropertyOrder":{"&":["baseUrl"]},"isPrivate":false,"metaSortKey":1586364619197,"modified":1586454398435,"name":"Desenvolvimento","parentId":"env_ecebd588a28b63904669810b29d498a8f3c6b1b4","_type":"environment"}]}
```


 
