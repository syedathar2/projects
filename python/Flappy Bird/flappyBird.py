import pygame
import sys
import random

def continuousFloor():
    gameScreen.blit(floor, (floorXAnimation,450))
    # we are placing two floors next to each other so that it looks continuous
    gameScreen.blit(floor, (floorXAnimation + 288,450))

def newPipe():
    randomPipes = random.choice(pipeHeight)
    bottomPipe = pipeSurface.get_rect(midtop = (556, randomPipes))
    topPipe = pipeSurface.get_rect(midbottom = (556, randomPipes - 150))
    return bottomPipe, topPipe

def pipeMovement(pipes):
    for pipe in pipes:
        pipe.centerx -= 5
    pipeVisibility = [pipe for pipe in pipes if pipe.right > -25]
    return pipeVisibility

def continuousPipes(pipes):
    for pipe in pipes:
        if pipe.bottom >= 512:
            gameScreen.blit(pipeSurface, pipe)
        else:
            flipPipe = pygame.transform.flip(pipeSurface, False, True)
            gameScreen.blit(flipPipe, pipe) 
    
def collision(pipes):
    global canScore
    for pipe in pipes:
        if flapBirdRect.colliderect(pipe):
            collisionSound.play()
            canScore = True
            return False
    if flapBirdRect.top <= -50 or flapBirdRect.bottom >= 450:
        collisionSound.play()
        canScore = True
        return False
    return True

def birdRotation(bird):
    newBird = pygame.transform.rotozoom(bird, - movement * 3, 1)
    return newBird

def flapAnimation():
    newBird = flapBirdFrame[index]
    newBirdRect = newBird.get_rect(center = (50, flapBirdRect.centery))
    return newBird, newBirdRect

def displayScore(gameState):
    if gameState == 'gameOn':
        scoreSurface = gameFont.render(str (int(score)), True, (255,255, 255))
        scoreRect = scoreSurface.get_rect(center = (144, 50))
        gameScreen.blit(scoreSurface, scoreRect)
    if gameState == 'gameOver':
        scoreSurface = gameFont.render(f'Score: {int(score)}', True, (255,255, 255))
        scoreRect = scoreSurface.get_rect(center = (144, 50))
        gameScreen.blit(scoreSurface, scoreRect)

        highScoreSurface = gameFont.render(f'High Score: {int(highScore)}', True, (255,255, 255))
        highScoreRect = highScoreSurface.get_rect(center = (144, 425))
        gameScreen.blit(highScoreSurface, highScoreRect)

        playAgainSurface = gameFont.render('Press Space to Play Again', True, (255,255, 255))
        playAgainRect = playAgainSurface.get_rect(center = (144, 400))
        gameScreen.blit(playAgainSurface, playAgainRect)

def scoreUpdate(score, highScore):
    if score > highScore:
        highScore = score
    return highScore

def pipeScoreUpdate():
    global score, canScore
    if pipelst:
        for pipe in pipelst:
            if 45 < pipe.centerx < 55 and canScore:
                score = score + 1
                updateScoreSound.play()
                canScore = False
            if pipe.centerx < 0:
                canScore = True

# pygame.mixer.pre_init(frequency = 44100, size = 16, channels = 1, buffer = 512)
pygame.init()
gameScreen = pygame.display.set_mode((288,512))
gravity = 0.25
movement = 0
floorXAnimation = 0
gameStart = True
score = 0
highScore = 0
playAgain = ''
gameFont = pygame.font.Font('04B_19.TTF', 20)
canScore = True

clocks = pygame.time.Clock()
# images should in the same folder since it is easier to import
background = pygame.image.load('assets/backgroundday.png').convert()

floor = pygame.image.load('assets/base.png').convert()
# floor = pygame.transform.scale2x(floor)


# flapBirdSurface = pygame.image.load('assets/bluebird-midflap.png').convert_alpha()
# flapBirdRect = flapBirdSurface.get_rect(center = (50,256))
flapBirdDownflap = pygame.image.load('assets/bluebird-downflap.png').convert_alpha()
flapBirdMidflap = pygame.image.load('assets/bluebird-midflap.png').convert_alpha()
flapBirdUpflap = pygame.image.load('assets/bluebird-upflap.png').convert_alpha()
flapBirdFrame = [flapBirdDownflap, flapBirdMidflap, flapBirdUpflap]
index = 0
flapBirdSurface = flapBirdFrame[index]
flapBirdRect = flapBirdSurface.get_rect(center = (50, 256))

pipeSurface = pygame.image.load('assets/pipe-green.png').convert()
pipelst = []

TIMEPIPE = pygame.USEREVENT
pygame.time.set_timer(TIMEPIPE, 1800) # 1200 in milliseconds

BIRDFLAP = pygame.USEREVENT + 1
pygame.time.set_timer(BIRDFLAP, 200)

pipeHeight = [200, 300, 400]

gameOverSurface = pygame.image.load('assets/message.png').convert_alpha()
gameOverRect = gameOverSurface.get_rect(center = (144, 256))

flapSound = pygame.mixer.Sound('sound/sfx_wing.wav')
collisionSound = pygame.mixer.Sound('sound/sfx_hit.wav')
updateScoreSound = pygame.mixer.Sound('sound/sfx_point.wav')


done = False
while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE and gameStart == True:
                movement = 0
                movement = movement - 6
                flapSound.play()
            if event.key == pygame.K_SPACE and gameStart ==  False:
                gameStart = True
                pipelst.clear()
                flapBirdRect.center = (50,256)
                movement = 0
                score = 0
        if event.type == TIMEPIPE:
            pipelst.extend(newPipe())
        if event.type == BIRDFLAP:
            if index < 2:
                index += 1
            else:
                index = 0
            flapBirdSurface, flapBirdRect = flapAnimation()
            
        
            
    gameScreen.blit(background,(0,0))
   

    # floorXAnimation moves slightly with each iteration of the while loop. Thus,
    # we have an animation!
    # gameScreen.blit(floor, (floorXAnimation,450))
    floorXAnimation = floorXAnimation - 1
    continuousFloor()

    if floorXAnimation <= -288:
        floorXAnimation = 0

    if gameStart:

        
        movement = movement + gravity
        rotateBird = birdRotation(flapBirdSurface) 
        flapBirdRect.centery += movement
        gameScreen.blit(rotateBird, flapBirdRect)

        gameStart = collision(pipelst)
        pipelst = pipeMovement(pipelst)

        continuousPipes(pipelst)
        pipeScoreUpdate()
        
        displayScore('gameOn')

    else:
        gameScreen.blit(gameOverSurface, gameOverRect)
        highScore = scoreUpdate(score, highScore)
        displayScore('gameOver')
        
    
    pygame.display.update()
    clocks.tick(50)
