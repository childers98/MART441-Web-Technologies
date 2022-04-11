class Collectibles{
    constructor(xCoord,yCoord,objectHeight,objectWidth, color) //making the collectibles in the same way the squares were made
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }
    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }
    get height()
    {
        return this.objectHeight;
    }
    get width()
    {
        return this.objectWidth;
    }
    get mainColor()
    {
        return this.color;
    }
}
