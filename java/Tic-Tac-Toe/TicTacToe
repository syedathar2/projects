public class TicTacToe implements ActionListener {
	// we are implementing an interface here
	Random random = new Random();
	JFrame gameFrame = new JFrame();
	JPanel gameTitle = new JPanel();
	JPanel gameButton = new JPanel();
	JLabel displayText = new JLabel();
	JButton[] allButtons = new JButton[9];
	boolean player1; // checks if its player1's turn
	TicTacToe() {
		gameFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		gameFrame.setSize(600, 600);
		gameFrame.getContentPane().setBackground(new Color (238,238,228));
		gameFrame.setLayout(new BorderLayout());
		gameFrame.setVisible(true);
		
		displayText.setBackground(new Color (30, 129, 176));
		displayText.setForeground(new Color (234, 182, 118));
		displayText.setFont(new Font ("Baskerville Old Face", Font.BOLD, 65));
		displayText.setHorizontalAlignment(JLabel.CENTER);
		displayText.setText("Tic-Tac-Toe");
		displayText.setOpaque(true);
		
		gameTitle.setLayout(new BorderLayout());
		gameTitle.setBounds(0,0,900,100);
		
		gameTitle.add(displayText);
		gameFrame.add(gameTitle, BorderLayout.NORTH);
		gameFrame.add(gameButton);
		
		
		gameButton.setLayout(new GridLayout(3,3));
		gameButton.setBackground(new Color (250, 250, 250));
		
		for (int i = 0; i < 9; i++) {
			allButtons[i] = new JButton();
			gameButton.add(allButtons[i]);
			allButtons[i].setFont(new Font("Song of coronos", Font.BOLD, 120));
			allButtons[i].setFocusable(false);
			allButtons[i].addActionListener(this);
		}
		
		Turn();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// Because we are using ActionListener interface, we need ActionPerformed
		for (int i = 0; i < 9; i++) {
			if (e.getSource() == allButtons[i]) {
				if(player1) {
					if(allButtons[i].getText() == "") {
						allButtons[i].setForeground(new Color(0, 200, 227));
						allButtons[i].setText("X");
						player1 = false;
						displayText.setText("It's O turn");
						check();
					}
				}
				else {
					if(allButtons[i].getText() == "") {
						allButtons[i].setForeground(new Color(235, 0, 78));
						allButtons[i].setText("O");
						player1 = true;
						displayText.setText("It's X turn");
						check();
					}
				}
			}
		}

	}
	public void Turn() {
		try {
			Thread.sleep(2000);
		} 
		catch (InterruptedException e) {
			e.printStackTrace();
		}
		// we will randomize turns between first and second player
		if(random.nextInt(2) == 0) {
			player1 = true;
			displayText.setText("It's X Turn");
		}
		else {
			player1 = false;
			displayText.setText("It's O Turn");
		}
	}

	public void check() {
		// we need to check the winning combinations
		
		// First, we check conditions for X Win
		if ((	allButtons[0].getText() == "X") && 
				(allButtons[1].getText() == "X") &&
				(allButtons[2].getText() == "X")) {
			checkXWins(0, 1, 2);
			
		}
		if ((	allButtons[3].getText() == "X") && 
				(allButtons[4].getText() == "X") &&
				(allButtons[5].getText() == "X")) {
			checkXWins(3, 4, 5);
			
		}
		if ((	allButtons[6].getText() == "X") && 
				(allButtons[7].getText() == "X") &&
				(allButtons[8].getText() == "X")) {
			checkXWins(6, 7, 8);
			
		}
		if ((	allButtons[0].getText() == "X") && 
				(allButtons[3].getText() == "X") &&
				(allButtons[6].getText() == "X")) {
			checkXWins(0, 3, 6);
			
		}
		if ((	allButtons[1].getText() == "X") && 
				(allButtons[4].getText() == "X") &&
				(allButtons[7].getText() == "X")) {
			checkXWins(1, 4, 7);
			
		}
		if ((	allButtons[2].getText() == "X") && 
				(allButtons[5].getText() == "X") &&
				(allButtons[8].getText() == "X")) {
			checkXWins(2, 5, 8);
			
		}
		if ((	allButtons[2].getText() == "X") && 
				(allButtons[4].getText() == "X") &&
				(allButtons[6].getText() == "X")) {
			checkXWins(2, 4, 6);
			
		}
		
		// Now, we check conditions for O Win
		
		if ((	allButtons[0].getText() == "O") && 
				(allButtons[1].getText() == "O") &&
				(allButtons[2].getText() == "O")) {
			checkOWins(0, 1, 2);
			
		}
		if ((	allButtons[3].getText() == "O") && 
				(allButtons[4].getText() == "O") &&
				(allButtons[5].getText() == "O")) {
			checkOWins(3, 4, 5);
			
		}
		if ((	allButtons[6].getText() == "O") && 
				(allButtons[7].getText() == "O") &&
				(allButtons[8].getText() == "O")) {
			checkOWins(6, 7, 8);
			
		}
		if ((	allButtons[0].getText() == "O") && 
				(allButtons[3].getText() == "O") &&
				(allButtons[6].getText() == "O")) {
			checkOWins(0, 3, 6);
			
		}
		if ((	allButtons[1].getText() == "O") && 
				(allButtons[4].getText() == "O") &&
				(allButtons[7].getText() == "O")) {
			checkOWins(1, 4, 7);
			
		}
		if ((	allButtons[2].getText() == "O") && 
				(allButtons[5].getText() == "O") &&
				(allButtons[8].getText() == "O")) {
			checkOWins(2, 5, 8);
			
		}
		if ((	allButtons[2].getText() == "O") && 
				(allButtons[4].getText() == "O") &&
				(allButtons[6].getText() == "O")) {
			checkOWins(2, 4, 6);
			
		}

	}

	public void checkXWins(int x, int y, int z) {
		allButtons[x].setBackground(Color.GREEN);
		allButtons[y].setBackground(Color.GREEN);
		allButtons[z].setBackground(Color.GREEN);
		
		for (int i = 0; i < 9; i++ ) {
			allButtons[i].setEnabled(false);
		}
		displayText.setText("Player X Wins!");
	}
	public void checkOWins(int j, int k, int l) {
		allButtons[j].setBackground(Color.GREEN);
		allButtons[k].setBackground(Color.GREEN);
		allButtons[l].setBackground(Color.GREEN);
		
		for (int i = 0; i < 9; i++ ) {
			allButtons[i].setEnabled(false);
		}
		displayText.setText("Player O Wins!");

	}
}
