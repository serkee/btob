function changeImage(element) {
    const mainImage = document.getElementById('mainPreview');
    mainImage.src = element.src;
  
    // 모든 썸네일에서 active 제거
    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
  
    // 선택된 썸네일에 active 추가
    element.classList.add('active');
  }
  


// 사용자가 제공한 모달 함수 통합
const modalOverlay = document.getElementById('modalOverlay');

function openModal(title) {
    if(title){
        document.querySelector('.modal-head h2').textContent = title || '구매안전 서비스 안내';
        let content = '';
        switch (title) {
            case '전자금융거래 이용약관':
                content = '전자금융거래 이용약관 내용입니다. 사용자는 본 약관에 동의함으로써 전자금융거래 서비스를 이용할 수 있습니다. 자세한 내용은 네이버페이 홈페이지에서 확인 가능합니다.';
                break;
            case '결제대행 서비스 제공 동의':
                content = '결제대행 서비스 제공 동의 내용입니다. 네이버파이낸셜(주)가 결제대금을 예치하며, 거래 안전을 보장합니다. 결제대금예치업 등록번호: 02-006-00056';
                break;
            case '개인정보 제3자 제공 동의':
                content = '개인정보 제3자 제공 동의 내용입니다. 판매자 및 결제대행사와 개인정보를 공유하여 서비스를 제공합니다. 동의하지 않아도 주문은 가능합니다.';
                break;
            case '마케팅 정보 수신 동의':
                content = '마케팅 정보 수신 동의 내용입니다. SMS/이메일을 통해 프로모션 정보를 수신하며, 언제든 철회 가능합니다. 동의하지 않아도 주문에 영향 없습니다.';
                break;
            default:
                content = document.querySelector('.modal-body ul').innerHTML; // 기본 구매안전 서비스 내용
        }
        document.querySelector('.modal-body').innerHTML = content ? `<p class="msg">${content}</p>` : document.querySelector('.modal-body ul').innerHTML;
    }
    modalOverlay.style.display = 'flex';
}
function closeModal() {
    modalOverlay.style.display = 'none';
}

// ESC 키로 닫기
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// 오버레이 클릭 시 닫기
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) closeModal();
});