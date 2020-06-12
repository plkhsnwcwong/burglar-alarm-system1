# 防盜小保鑣 (1號 Micro:bit)

## Step 1

點選「廣播」,把「廣播群組設為1」拖曳到「當開始時」的C形開口。

```blocks
radio.setGroup(1)
```

## Step 2

修改「廣播群組」數值為20，令兩塊Micro:bit在相同的群組可以互通訊息。
```blocks
radio.setGroup(20)
```

## Step 3
點選「廣播」,把「當收到廣播 receivedNumber」拖曳到程式區。
```blocks
radio.onReceivedNumber(function (receivedNumber) {
	
})
radio.setGroup(20)
```

## Step 4
點選「邏輯」,把「如果...那麼...」拖曳到「當收到廣播
receivedNumber」的 C 形開口。
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
    	
    }
})
radio.setGroup(20)
```

## Step 5
再次點選「邏輯」,把「=」方塊拖曳到「如果」後面。
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (0 == 0) {
    	
    }
})
radio.setGroup(20)
```

## Step 6
點選「變數」,把「receivedNumber」拖曳到「=」的左面空格。
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0 {
    	
    }
})
radio.setGroup(20)
```

## Step 7
修改「=」右面的數值為「1」。
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 {
    	
    }
})
radio.setGroup(20)
```

## Step 8
點選「基本」,把「顯示圖示」方塊拖曳到「那麼」的 C 形開口。
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
    }
})
radio.setGroup(20)
```

## Step 9
修改圖示為「sad(悲傷)」。
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
    }
})
radio.setGroup(20)
```
