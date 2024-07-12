const path = document.querySelector('path');
const imgs = [
    document.querySelector('#img1'),
    document.querySelector('#img2'),
    document.querySelector('#img3'),
    document.querySelector('#img4')
];

const pathLength = path.getTotalLength();
const duration = 24000; // 24 seconds

const animate = (img, delay) => {
    const startTime = performance.now() - delay;

    const updatePosition = () => {
        const currentTime = (performance.now() - startTime) % duration;
        const progress = currentTime / duration;
        const point = path.getPointAtLength(progress * pathLength);

        img.style.transform = `translate(${point.x}px, ${point.y}px)`;
        requestAnimationFrame(updatePosition);
    };

    updatePosition();
};

// 각 이미지를 다른 지연 시간으로 애니메이션
animate(imgs[0], 0);
animate(imgs[1], duration / 4);
animate(imgs[2], (duration / 4) * 2);
animate(imgs[3], (duration / 4) * 3);