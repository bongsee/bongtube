const timeInSeconds = {
  year: 60 * 60 * 24 * 365,
  month: 60 * 60 * 24 * 30,
  day: 60 * 60 * 24,
  hour: 60 * 60,
  minute: 60,
} as const

export const getRelativeTime = (targetTime: string) => {
  const timeDiffInSeconds = Math.floor(
    (new Date().getTime() - Date.parse(targetTime)) / 1000
  )
  let computedValue = Math.floor(timeDiffInSeconds / timeInSeconds.year)
  switch (true) {
    case computedValue > 1:
      return `${computedValue}년 전`
    case (computedValue = Math.floor(timeDiffInSeconds / timeInSeconds.month)) >
      1:
      return `${computedValue}달 전`
    case (computedValue = Math.floor(timeDiffInSeconds / timeInSeconds.day)) >
      1:
      return `${computedValue}일 전`
    case (computedValue = Math.floor(timeDiffInSeconds / timeInSeconds.hour)) >
      1:
      return `${computedValue}시간 전`
    case (computedValue = Math.floor(
      timeDiffInSeconds / timeInSeconds.minute
    )) > 1:
      return `${computedValue}분 전`
    default:
      return `${Math.floor(timeDiffInSeconds)}초 전`
  }
}
