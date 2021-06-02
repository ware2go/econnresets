# Get an `ECONNRESET`

## In `server`
```
npm i
node .
```

## In `client`
```
npm i
nest start
```

## In `customer`
1. `brew install k6`
2. `k6 run --vus 100 --iterations 1000 script-client.ts`
