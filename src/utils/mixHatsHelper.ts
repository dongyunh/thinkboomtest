function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

type User = { nickname: string; hat: string };

type UserData = User[];

type HatsData = string[];

type MixHatsProps = {
  users: UserData;
  hats: HatsData;
};

// 랜덤한 모자를 뿌려주는 Helper 함수
const mixHatsHelper = ({ users, hats }: MixHatsProps) => {
  let tmpHatArr = new Set(hats);
  const initialState: User[] = [];

  const mixHats = users.reduce((sumedUser: User[], user, idx): User[] => {
    const randomNum = getRandomInt(0, tmpHatArr.size - 1);
    const randomHat = [...tmpHatArr][randomNum];
    const setedUser = {
      nickname: user.nickname,
      hat: randomHat,
    };

    tmpHatArr.delete(randomHat);
    if (tmpHatArr.size === 0) tmpHatArr = new Set(hats);

    sumedUser[idx] = setedUser;

    return sumedUser;
  }, initialState);

  return mixHats;
};

export default mixHatsHelper;
