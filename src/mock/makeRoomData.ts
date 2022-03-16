type DataType = {
  type: 'number' | 'timer';
  data: number[];
};

export const memberCount: DataType = { type: 'number', data: [1, 2, 3, 4, 5, 6, 7, 8] };

export const timerOptions: DataType = { type: 'timer', data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
