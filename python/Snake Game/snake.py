import turtle
import time
import random


game = turtle.Screen()
game.title("Snake Game")
game.bgcolor("black")
game.setup(width = 600, height = 600)
game.tracer(0)

head = turtle.Turtle()
head.speed(0)
head.shape("square")
head.color("white")
head.penup()
head.goto(0,50)
head.direction = "stop"

delay = 0.1

# movement of the snake
def move():
    if head.direction == "up":
        y = head.ycor()
        head.sety(y + 20)

    if head.direction == "down":
        y = head.ycor()
        head.sety(y - 20)

    if head.direction == "right":
        x = head.xcor()
        head.setx(x + 20)

    if head.direction == "left":
        x = head.xcor()
        head.setx(x - 20)

def goUp():
    if head.direction != "down":
        head.direction = "up"

def goDown():
    if head.direction != "up":
        head.direction = "down"

def goRight():
    if head.direction != "left":
        head.direction = "right"

def goLeft():
    if head.direction != "right":
        head.direction = "left"

# assigning keys to movements of the snake
game.listen()
game.onkey(goUp, "w")
game.onkey(goDown, "s")
game.onkey(goRight, "d")
game.onkey(goLeft, "a")

#creating food for the snake
food = turtle.Turtle()
food.speed(0)
food.shape("circle")
food.color("yellow")
food.penup()
food.shapesize(0.50, 0.50)
food.goto(0, 0)


segments = []
score = 0
highScore = 0

pen = turtle.Turtle()
pen.speed(0)
pen.shape("square")
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 260)
pen.write("Score: 0 High Score: {}".format(highScore), align = "center", font = "Helvetica 12")


done = False
while not done:
    game.update()

    if head.xcor() > 290 or head.xcor() < -290 or head.ycor() > 290 or head.ycor() < -290:
        time.sleep(1)
        head.goto(0,0)
        head.direction = "stop"

        for segment in segments:
            segment.goto(1000, 1000)
        segments = []
        score = 0
        pen.clear()
        pen.write("Score: {} High score: {}".format(score, highScore), align="center", font=("Helvetica 12"))

    if head.distance(food) < 15:
        x = random.randint(-270, 270)
        y = random.randint(-270, 270)
        food.goto(x,y)
        newSegment = turtle.Turtle()
        newSegment.speed(0)
        newSegment.shape("square")
        newSegment.color("grey")
        newSegment.penup()
        segments.append(newSegment)

        score += 10
        if score > highScore:
            highScore = score
        pen.clear()
        pen.write("Score: {} High Score: {}".format(score, highScore), align="center", font=("Helvetica 12"))
        
    for index in range(len(segments)-1, 0, -1):
        x = segments[index-1].xcor()
        y = segments[index-1].ycor()
        segments[index].goto(x, y)

    if len(segments) > 0:
        x = head.xcor()
        y = head.ycor()
        segments[0].goto(x, y)
    move()


# check for body collision
    for segment in segments:
        if segment.distance(head) < 20:
            time.sleep(1)
            head.goto(0, 0)
            head.direction = "stop"

            for segment in segments:
                segment.goto(1000, 1000)
            segments = []
            score = 0
            delay = 0.1
            pen.clear()
            pen.write("Score: {} High Score: {}".format(score, highScore), align="center", font=("Helvetica 12"))


    time.sleep(delay)
game.mainloop()
