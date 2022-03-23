const shareUrlHelper = (title: string, text: string) => {
  window.navigator.share({
    title: title, // 공유될 제목
    text: text, // 공유될 설명
    url: '', // 공유될 URL
    files: [], // 공유할 파일 배열
  });
};

export default shareUrlHelper;
