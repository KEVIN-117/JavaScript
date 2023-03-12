# def accum(s):
#     # your code
#     result = ''
#     for i in range(len(s)):
#         aux = str(s[i]*int(i+1)).capitalize()+"-"
#         result += aux
#     return result[0:len(result)-1]

# def accum(s):
#     return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))
print(accum("abcd"))