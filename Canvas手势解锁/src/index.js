(function(){
    window.canvasLock=function(obj){
        this.height=obj.height
        this.width=obj.width
        this.chooseType=obj.chooseType
    }
    canvasLock.prototype.initDom=function(){
        let wrap=document.createElement('div')
        let str='<h4 id="title" class="title">绘制解锁图案</h4>'
        wrap.setAttribute('style','position:absolute;top:0;right:0;bottom:0;left:0;')
        wrap.innerHTML=str

        let canvas=document.createElement('canvas')
        canvas.setAttribute('id','canvas')
        canvas.style.cssText='background-color:#305066;display:inline-block'
        canvas.width=this.width ||300
        canvas.height=this.height ||300
        canvas.style.height=this.height
        canvas.style.width=this.width
        wrap.appendChild(canvas)
        document.body.appendChild(wrap)

    }
    canvasLock.prototype.drawCicle=function(x,y){
        
    }
    canvasLock.prototype.createCicle = function () {
        let n=this.chooseType
        let count=0
        this.r=this.ctx.canvas.width/(2+4*n)
        this.lastPoint=[]
        this.arr=[]
        this.restPoint=[]
        let r=this.r
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                count++
                let obj={
                    x:j*4*r+3*r,
                    y:i*4*r+3*r,
                    index:count
                }
                this.arr.push(obj)
            }
        }
        this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)
        for(let i=0;i<this.arr.length;i++){
            this.drawCicle(this.arr[i].x,this.arr[i].y)
        }
    }
    canvasLock.prototype.init=function(){
        this.initDom()
        this.canvas=document.getElementById('canvas')
        this.ctx=this.canvas.getContext('2d')
        this.createCicle()
    }
})()