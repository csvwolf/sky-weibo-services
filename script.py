# !/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import os

from plan import Plan

path = os.getcwd() # 获取当前路径
# cron = Plan()
# cron.command('date', every='1.day')

def SelectCommand(command, nextArgv):
    """
    根据命令进行选择
    :param command: 传入的命令
    :param nextArgv: 额外的输入
    :return:
    """
    if command == 'help':
        helpSystem(nextArgv)
    else:
        if SelectFile(command):
            if nextArgv == 'on':
                CreatePlan(command)
            elif nextArgv == 'off':
                DestroyPlan(command)
            else:
                print 'Something Error!'


def CreatePlan(command):
    """
    创建指定命令任务
    :param command:
    :return:
    """
    cron = Plan(command)
    cron.command('node ' + path + '/index.js ' + command, every='1.day', at='16:51')
    cron.run('write')

def DestroyPlan(command):
    """
    取消指定任务
    :param command:
    :return:
    """
    cron = Plan(command)
    # cron.command('node index.js', every='1.day', at='16:19')
    cron.run('clear')


def GetSelectorList():
    """
    获取模块列表
    :return: 模块列表
    """
    return {
        'singleDog': '单身狗模块, 每日发送单身计时器'
    }

def helpSystem(keywords):
    selector = GetSelectorList()
    defaultText = \
    """
            **** Weibo Service Help Panel ****
        for example:
            script.py singleDog on // 开启单身狗定时计划模块
            script.py singleDog off // 关闭单身狗定时计划模块
            script.py help singleDog // 查看模块介绍与帮助

    """
    result = selector.get(keywords) or defaultText  # 如果没有,返回默认的帮助文档
    print result

def SelectFile(file):
    """
    是否存在指定模块
    :param file: 输入的命令(文件)名
    :return: 存在指定模块与否
    """
    if os.path.isfile('./controllers/' + file + 'Controller.js'):
        return True
    else:
        print helpSystem(None)
        return False



if __name__ == "__main__":
    command = None
    nextArgv = None
    if len(sys.argv) == 2:
        command = sys.argv[1]
    elif len(sys.argv) == 3:
        command = sys.argv[1]
        nextArgv = sys.argv[2]

    if command:
        SelectCommand(command, nextArgv)
    else:
        helpSystem(None)
