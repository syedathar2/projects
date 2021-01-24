# To run the code: Calculator().pack(). It creates a tk to run on a window

from tkinter import *

class Calculator(Frame):
    
    # init - layout and activates Buttons
    def __init__(self, parent = None):
        Frame.__init__(self, parent)
        # more general
        # super().__init__(self,parent)

        # layout Calculator
        # screen - entry at top
        self.entry = Entry(self, font = 'Courier 14')
        self.entry.grid(row = 0, column = 0, columnspan = 4)

        # Buttons
        labels = '0123456789+-*/().%=C'
        # create Buttons in a loop
        for i,label in enumerate(labels): #i refers to index and label is the number/symbol at the index.
            # define 'local' function for each Button!
            def cmd(key = label): # every button on calculator gets assigned a different default
                self.onClick(key)

            b = Button(self,command = cmd,text = label, width = 3, height = 3)
            b.grid(row = i //6+1, column = i%4)

    # onClick - respond to Buttons being pressed
    def onClick(self,key):
        print('onClick', key)
        if key == '=':
            # retrieve expression
            expr = self.entry.get()
            # calculate expression
            try:
                result = eval(expr)
            except:
                result = 'ERROR!'
            # display result
            self.entry.delete(0,END) #END comes in from tkinter import *.
            # Provides an extra layer of protection
            self.entry.insert(END, result)
        elif key == 'C':
            self.entry.delete(0,END)
        else:
            self.entry.insert(END,key)
