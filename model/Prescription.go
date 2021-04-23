package model

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Prescription struct {
	gorm.Model `swaggerignore:"true"`
	Weight     float64   `json:"weight"`	
	Price     float64   `json:"price"`
	Medication string      `json:"medication"`
	Date       []time.Time `json:"date"`
	AnimalID   uint        `gorm:"TYPE:integer REFERENCES animals"`			//Animal ao qual está associado a prescrição
	ReminderID uint        `gorm:"TYPE:integer REFERENCES reminders"`		//Reminder respostavel por uma data 
}
