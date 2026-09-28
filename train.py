


def calculateSumOfNumbers(arr):
  result = 0
  for ele in arr:
    if type(ele) in (int, float):
      result+= ele

  return result

print(calculateSumOfNumbers([10, "10", {"son":10}, True, 35, 10.5]))

# def palindormCheck(str):
#     reverse = str[:: -1]
#     return str == reverse

# print(palindormCheck("dadd"))


# def getSquareNumbers(arr):
#     list = []
#     for num in arr:
#         list.append(f"number:{num}, square:{num ** 2}")
#     return list

# result = getSquareNumbers([1,2,3,])
# print(result)

# TASK M: 4

# Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
# MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
