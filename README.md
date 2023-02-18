
# Mongo-Crypto

Bu proje benim mongo kullanmayı öğrenmek için çıktığım yolda kendime öğrettiğim şeylerden oluşmaktadır projenin bir kaç kısımdan oluşması ve olduğunca modern teknolojiler kullanılarak modern bir web tasarımı yolunda ilerlelemiz en uygunu olacaktır.


## API Kullanımı

#### Tüm öğeleri getir

```http
  GET /api/items
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Gerekli**. API anahtarınız. |

#### Öğeyi getir

```http
  GET /api/items/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### add(num1, num2)

İki sayı alır ve toplamı döndürür.

  