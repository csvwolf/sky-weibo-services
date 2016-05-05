# !/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import os

from plan import Plan

path = os.getcwd()
print path
# cron = Plan()
# cron.command('date', every='1.day')

def SelectCommand(command, nextArgv):
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
    cron = Plan(command)
    cron.command('node ' + path + '/index.js', every='1.day', at='16:51')
    cron.run('write')

def DestroyPlan(command):
    cron = Plan(command)
    # cron.command('node index.js', every='1.day', at='16:19')
    cron.run('clear')


def GetSelectorList():
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
    result = selector.get(keywords) or defaultText
    print result

def SelectFile(file):
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
