class Panel {
    constructor() {
        this.scale = 0;
        this.angle = 0;
    }

    draw() {
        context.fillStyle = 'rgba(255,0,0,.8)';
        // 변환 초기화
        context.resetTransform();
        // context.resetTransform(1,0,1,0,0);
        context.translate(oX, oY); // 변환 기준 (중심점)
        context.scale(this.scale, this.scale);
        context.rotate(canUtil.toRadian(this.angle)); 
        context.translate(-oX, -oY); // 위치 이동이 아닌 크기 증가이니까 기존 위치로 변환
        context.fillRect(oX-150, oY-150, 300, 300);
        context.resetTransform();
    }

    showContent() {
        context.fillStyle = '#fff';
        context.fillText(selectedBox.index, oX, oY);
    }
}