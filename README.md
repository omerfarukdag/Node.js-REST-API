
## API Reference

#### Get all data

```http
  GET /api/cars
```

#### Get data by id

```http
  GET /api/cars/:id
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |


#### Add data

```http
  POST /api/cars
```

| Parameter | Type     |
| :-------- | :------- |
| `brand`      | `string` |
| `model`      | `string` |
| `year`      | `integer` |

#### Update data

```http
  PUT /api/cars/:id
  PATCH /api/cars/:id
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |
| `brand`      | `string` |
| `model`      | `string` |
| `year`      | `integer` |

#### Delete data

```http
  DELETE /api/cars/:id
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |


