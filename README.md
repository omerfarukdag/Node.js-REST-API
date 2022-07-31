
## API Reference

#### Get all data

```
  GET /api/cars
```

#### Get data by id

```
  GET /api/cars/:id
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |


#### Add data

```
  POST /api/cars
```

| Parameter | Type     |
| :-------- | :------- |
| `brand`      | `string` |
| `model`      | `string` |
| `year`      | `integer` |

#### Update data

```
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

```
  DELETE /api/cars/:id
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |


